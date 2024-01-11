import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API_IMAGE_URL } from '../constants'

const Cast = ({ cast }) => {
    const navigation = useNavigation();
    return (
        <View className='my-8'>
            <Text className='text-2xl text-white px-4'>Top Cast</Text>
            <ScrollView className='px-4 mt-2 mb-6'
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {cast && cast?.map((c, i) => (

                    <TouchableOpacity key={i} className='mr-4' onPress={() => navigation.navigate('Person')}>
                        <View className='items-center'>
                            <View className='w-20 h-20 rounded-full border border-neutral-400 items-start overflow-hidden'>
                                <Image
                                    source={{uri : API_IMAGE_URL + c?.profile_path}}
                                    className='w-20 h-24'
                                />
                            </View>
                            <Text className='text-base text-neutral-400'>{c?.character}</Text>
                            <Text className='text-base text-neutral-400'>{c?.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Cast