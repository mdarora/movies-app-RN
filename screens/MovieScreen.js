import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles, theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MoviesList from '../components/MoviesList';
import { API_BASE_URL, API_IMAGE_URL, API_KEY } from '../constants';

const ios = Platform.OS === 'ios';

const MovieScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  const [isFavourite, setIsFavourite] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);

  const getMovieDetails =async () => {
    try {
      const res =await fetch(`${API_BASE_URL}/movie/${params.id}?language=en-US&api_key=${API_KEY}`);
      const data =await res.json();
      data && setMovieDetails(data);
    } catch (error) {
      console.error('error getting movie details : ', error);
    }
  }
  
  const getMovieCast =async () => {
    try {
      const res =await fetch(`${API_BASE_URL}/movie/${params.id}/credits?language=en-US&api_key=${API_KEY}`);
      const data =await res.json();
      data && data.cast && setCast(data.cast);
    } catch (error) {
      console.error('error getting movie cast : ', error);
    }
  }
  
  const getSimilarMovies =async () => {
    try {
      const res =await fetch(`${API_BASE_URL}/movie/${params.id}/similar?language=en-US&api_key=${API_KEY}`);
      const data =await res.json();
      data && data.results && setSimilarMovies(data.results);
    } catch (error) {
      console.error('error getting Similar movies : ', error);
    }
  }

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
    getSimilarMovies();
  }, [params]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className='flex-1 bg-neutral-900'
    >
      <View className='w-full'>

        <SafeAreaView className={`absolute z-20  left-2 right-2 flex-row justify-between items-center ${ios ? '' : 'mt-12'}`}>
          <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            <HeartIcon size={30} strokeWidth={2.5} color={isFavourite ? theme.text : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={{uri: API_IMAGE_URL + params.poster_path}}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23,23,23, 1)']}
            style={{ width, height: height * 0.40 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>
          <Text className='text-white text-center text-3xl font-bold tracking-wider'>{params.title}</Text>
          <Text className='text-neutral-400 text-base text-center font-semibold'>{movieDetails?.status} • {movieDetails?.release_date?.split('-')[0]} • {movieDetails?.runtime} min</Text>
          <Text className='text-neutral-400 text-base text-center font-semibold'>
            {movieDetails?.genres?.map((g, i) => {
              return (i == movieDetails?.genres.length - 1 ? `${g.name}` : `${g.name} • `)
            })}
          </Text>
          <Text className='text-neutral-400 mx-4 tracking-wide'>{movieDetails?.overview}</Text>
        </View>

        <Cast cast={cast}/>

        <MoviesList title='Similar Movies' hideSeeBtn={true} movies={similarMovies}/>

      </View>
    </ScrollView>
  )
}

export default MovieScreen