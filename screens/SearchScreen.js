import { View, Text, useWindowDimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ChevronLeftIcon, XMarkIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Image } from 'react-native';
import { styles, theme } from '../theme';
import { API_BASE_URL, API_IMAGE_URL, API_KEY } from '../constants';

const ios = Platform.OS === 'ios';

const SearchScreen = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();

    const [searchInput, setSearchInput] = useState('');
    const [result, setResult] = useState([]);

    const handleSearch =async () => {
        if (searchInput.trim().length > 0) {
            try {
                const res =await fetch(`${API_BASE_URL}/search/movie?query=${searchInput.trim()}&language=en-US&page=1&api_key=${API_KEY}`);
                const data =await res.json();
                data && data.results && setResult(data.results);
            } catch (error) {
                console.error('error searching movies : ', error);
            }
        } else {
            Alert.alert('Input is empty');
        }
    }


    const movieName = 'Lorem ipsum dolor sit amet';
    return (
        <View className={`bg-neutral-900 flex-1`}>
            <SafeAreaView className={`flex-1 ${ios ? '' : 'mt-12'}`}>
                <StatusBar style={'light'} />

                <SafeAreaView className={`mx-4 mb-4 flex-row justify-between items-center ${ios ? '' : 'mt-12'}`}>
                    <TouchableOpacity style={styles.background} className='rounded-xl p-1 mr-1' onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={25} strokeWidth={2.5} color={'white'} />
                    </TouchableOpacity>

                    <View className='flex-row flex-1 justify-between items-center border border-neutral-500 rounded-full'>
                        <View className='overflow-hidden'>
                            <TextInput placeholder='Search Movie' placeholderTextColor={'lightgray'} value={searchInput} onChangeText={(value) => setSearchInput(value)}
                                className='px-4 py-2 text-base text-white font-semibold tracking-wide rounded-full flex-1'
                            />
                        </View>
                    </View>
                    <View className='flex-row items-center'>
                        <TouchableOpacity className=''
                            onPress={() => setSearchInput('')} >
                            <XMarkIcon size={25} color='gray' />
                        </TouchableOpacity>

                        <TouchableOpacity className='bg-neutral-500 rounded-full p-3 m-1'
                            onPress={handleSearch} >
                            <MagnifyingGlassIcon size={25} color={theme.text} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

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
                                                source={{uri: API_IMAGE_URL + item.poster_path}}
                                                style={{ width: width * 0.44, height: height * 0.3 }}
                                                className={`rounded-2xl`} />
                                            <Text className='text-white text-ellipsis'>
                                                {item.title?.length > 24 ? item.title?.slice(0, 24) + '...' : item.title}
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