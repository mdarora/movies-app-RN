import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import { useNavigation } from '@react-navigation/native';


const TrendingMovies = ({data}) => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation();

    const handleClick = (movie) => {
        navigation.navigate('Movie', movie);
    }
  return (
    <View className='my-6'>
      <Text className='text-white text-2xl mx-4 mb-5' >Trending</Text>
      <Carousel
        data={data}
        renderItem={(item) => <MovieCard movie={item} handleClick={handleClick}/>}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  )
}

export default TrendingMovies