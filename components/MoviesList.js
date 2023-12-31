import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

const MoviesList = ({ title, movies }) => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    const movieName = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    return (
        <View className='mb-4'>
            <View className='flex-row items-center justify-between px-2'>
                <Text className='text-2xl text-white'>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className='text-lg'>See More</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='px-2'
            >
                {movies.map((movie, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', movie)}>
                        <View className='mr-4 my-2'>
                            <Image
                                source={require('../assets/images/moviePoster2.png')}
                                style={{width: width*0.33, height: height*0.22}}
                                className='rounded-2xl'
                            />
                            <Text className='text-gray-300'>{movieName.length > 16 ? movieName.slice(0, 16) + ' ...' : movieName}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default MoviesList