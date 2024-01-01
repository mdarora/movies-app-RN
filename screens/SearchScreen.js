import { View, Text, useWindowDimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { Image } from 'react-native';

const ios = Platform.OS === 'ios';

const SearchScreen = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const movieName = 'Lorem ipsum dolor sit amet';
    const [result, setResult] = useState([1,2,3,4,5]);
    return (
        <View className={`bg-neutral-900 flex-1`}>
            <SafeAreaView className={`flex-1 ${ios ? '' : 'mt-12'}`}>
                <StatusBar style={'light'} />

                <View className='mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'>
                    <TextInput placeholder='Search Movie' placeholderTextColor={'lightgray'}
                        className='flex-1 px-4 py-2 text-base text-white font-semibold tracking-wide'
                    />
                    <TouchableOpacity className='bg-neutral-500 rounded-full p-3 m-1'
                        onPress={() => navigation.goBack()} >
                        <XMarkIcon size={25} color='white'></XMarkIcon>
                    </TouchableOpacity>
                </View>

                {result.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        className='space-y-3'
                    >
                        <Text className='text-white mx-4'>Results  ({result.length})</Text>

                        <View className='flex-row justify-between flex-wrap'>
                            {result.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => navigation.push('Movie', item)}>
                                        <View className={`space-y-1 mb-4`}>
                                            <Image
                                                source={require('../assets/images/moviePoster2.png')}
                                                style={{ width: width * 0.44, height: height * 0.3 }}
                                                className={`rounded-2xl`} />
                                            <Text className='text-white text-ellipsis'>
                                                {movieName.length > 24 ? movieName.slice(0, 24) + '...' : movieName}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                    </ScrollView>

                ) : (
                    <View className='items-center'>
                        <Image source={require('../assets/images/movieTime.png')}
                        className='h-96 w-96' />
                    </View>
                )}


            </SafeAreaView>
        </View>
    )
}

export default SearchScreen