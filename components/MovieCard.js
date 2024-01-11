import { View, Text, useWindowDimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { API_IMAGE_URL } from '../constants';
import { useNavigation } from '@react-navigation/native';


const MovieCard = ({ movie }) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.push('Movie', movie.item);
  }
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image source={{ uri: API_IMAGE_URL + movie.item.poster_path }}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className='rounded-2xl' />
    </TouchableWithoutFeedback>
  )
}

export default MovieCard