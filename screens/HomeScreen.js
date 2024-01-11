import { View, Text, Platform, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { styles } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import { useNavigation } from '@react-navigation/native';
import { API_KEY, API_BASE_URL } from '../constants';

const ios = Platform.OS === 'ios';
const HomeScreen = () => {
    const navigation = useNavigation();
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setGetNowPlayingMovies] = useState([]);

    const getNowPlayingMovies = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);
            const data = await res.json();
            if (data && data.results) {
                setGetNowPlayingMovies(data.results);
            }
        } catch (error) {
            console.log('error getting now playing movies : ',error);
        }
    }

    const getUpcomingMovies = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`);
            const data = await res.json();
            if (data && data.results) {
                setUpcomingMovies(data.results);
            }
        } catch (error) {
            console.log('error getting upcoming movies : ',error);
        }
    }

    const getTopRatedMovies = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);
            const data = await res.json();
            if (data && data.results) {
                setTopRatedMovies(data.results);
            }
        } catch (error) {
            console.log('error getting top rated movies : ',error);
        }
    }

    useEffect(() => {
        getNowPlayingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, [])

    return (
        <View className='flex-1 bg-neutral-800'>
            <StatusBar style={'light'} />
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3 mt-12'}>

                <View className='flex-row justify-between items-center px-2 pb-4'>
                    <Bars3CenterLeftIcon size='30' color='white' strokeWidth={2} />
                    <Text className='text-3xl text-white font-bold'>
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 8 }}>
                <TrendingMovies />
                <MoviesList title='Now Playing' movies={nowPlayingMovies} />
                <MoviesList title='Top Rated' movies={topRatedMovies} />
                <MoviesList title='Upcoming' movies={upcomingMovies} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen