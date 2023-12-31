import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Cast = () => {
    const navigation = useNavigation();
    return (
        <View className='my-8'>
            <Text className='text-2xl text-white px-4'>Top Cast</Text>
            <ScrollView className='px-4 my-2'
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
        </View>
    )
}

export default Cast