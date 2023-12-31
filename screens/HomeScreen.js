import { View, Text } from 'react-native'
import React from 'react';
import { StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>
        <StatusBar />
      <Text className='text-red-500 text-xl font-bold'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen