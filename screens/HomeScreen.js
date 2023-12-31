import { View, Text, Platform, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import {styles} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';

const ios = Platform.OS === 'ios';
const HomeScreen = () => {
    const [trendings, setTrendings] = useState([1, 2, 3]);
    const [upcomingMovies, setUpcomingMovies] = useState([1,2,3]);
    const [topRatedMovies, setTopRatedMovies] = useState([1,2,3]);
    return (
        <View className='flex-1 bg-neutral-800'>
            <StatusBar style={'light'} />
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3 mt-12'}>

                <View className='flex-row justify-between items-center px-2 pb-4'>
                    <Bars3CenterLeftIcon size='30' color='white' strokeWidth={2} />
                    <Text className='text-3xl text-white font-bold'>
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 8}}>
                <TrendingMovies data={trendings}/>
                <MoviesList title='Upcoming' movies={upcomingMovies} />
                <MoviesList title='Top Rated' movies={topRatedMovies} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen