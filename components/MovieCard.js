import { View, Text, useWindowDimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';


const MovieCard = ({movie, handleClick}) => {
    const {height, width} = useWindowDimensions();
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image source={require('../assets/images/moviePoster1.png')} 
      style={{width: width * 0.6, height: height * 0.4}}
      className='rounded-2xl'/>
    </TouchableWithoutFeedback>
  )
}

export default MovieCard