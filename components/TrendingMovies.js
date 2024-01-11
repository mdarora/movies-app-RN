import { View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import { useNavigation } from '@react-navigation/native';
import { API_KEY, API_BASE_URL } from '../constants';


const TrendingMovies = () => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
        const data = await res.json();
        if (data && data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error('error getting trending movies: ', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <View className='my-6'>
      <Text className='text-white text-2xl mx-4 mb-5' >Trending</Text>
      <Carousel
        data={movies}
        renderItem={(item) => <MovieCard movie={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}

export default TrendingMovies