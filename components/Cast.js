import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MoviesList from './MoviesList'

const Cast = () => {
    const navigation = useNavigation();
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])
    return (
        <View className='my-8'>
            <Text className='text-2xl text-white px-4'>Top Cast</Text>
            <ScrollView className='px-4 mt-2 mb-6'
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-4' onPress={() => navigation.navigate('Person')}>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className='w-20 h-24'
                            />
                        </View>
                        <Text className='text-base text-neutral-400'>Jhon Wick</Text>
                        <Text className='text-base text-neutral-400'>Keanu Reevs</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <MoviesList title='Similar Movies' hideSeeBtn={true} movies={similarMovies}/>
        </View>
    )
}

export default Cast