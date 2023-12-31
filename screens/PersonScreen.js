import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme'

const ios = Platform.OS === 'ios';

const PersonScreen = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();

    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <ScrollView
            className='flex-1 bg-neutral-900' contentContainerStyle={{ paddingBottom: 20 }}
        >
            <SafeAreaView className={`absolute z-20  left-2 right-2 flex-row justify-between items-center ${ios ? '' : 'mt-3'}`}>
                <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={25} strokeWidth={2.5} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon size={30} strokeWidth={2.5} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View className='mt-20'>
                <View className='flex-row justify-center'
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOpacity: 1,
                        shadowOffset: { width: 0, height: 5 },
                    }}
                >
                    <View className='h-72 w-72 rounded-full border-2 border-neutral-500 items-center overflow-hidden'>
                        <Image source={require('../assets/images/castImage2.png')} style={{ height: height * 0.43, width: '100%' }} />
                    </View>
                </View>

                <View className='my-4'>
                    <Text className='text-3xl text-center text-white font-bold'>Keanu Reeves</Text>
                    <Text className='text-base text-center text-neutral-500 font-semibold'>London • United Kingdom</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default PersonScreen