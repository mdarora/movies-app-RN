import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';
import { API_IMAGE_URL } from '../constants';

const MoviesList = ({ title, movies, hideSeeBtn }) => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    return (
        <View className='mb-4'>
            <View className='flex-row items-center justify-between px-2'>
                <Text className='text-2xl text-white'>{title}</Text>
                {!hideSeeBtn && <TouchableOpacity>
                    <Text style={styles.text} className='text-lg'>See More</Text>
                </TouchableOpacity>}
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='px-2'
            >
                {movies.map((movie, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', movie)}>
                        <View className='mr-4 my-2'>
                            <Image
                                source={{uri : API_IMAGE_URL + movie.poster_path}}
                                style={{width: width*0.33, height: height*0.22}}
                                className='rounded-2xl'
                            />
                            <Text className='text-gray-200 text-center mt-1'>{movie.title.length > 16 ? movie.title.slice(0, 16) + ' ...' : movie.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default MoviesList