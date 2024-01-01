import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme'
import MoviesList from '../components/MoviesList'

const ios = Platform.OS === 'ios';

const PersonScreen = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const [isFavourite, setIsFavourite] = useState(false);

    const [movies, setMovies] = useState([1,2,3,4,5,6]);

    return (
        <ScrollView
            className='flex-1 bg-neutral-900' contentContainerStyle={{ paddingBottom: 20 }}
        >
            <SafeAreaView className={`absolute z-20  left-2 right-2 flex-row justify-between items-center ${ios ? '' : 'mt-12'}`}>
                <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={25} strokeWidth={2.5} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon size={30} strokeWidth={2.5} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View className='mt-20 bg-neutral-900'>
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
                <View className='mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full'>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 text-sm'>Male</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Bithday</Text>
                        <Text className='text-neutral-300 text-sm'>1999-08-13</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Known for</Text>
                        <Text className='text-neutral-300 text-sm'>Acting</Text>
                    </View>
                    <View className='px-2 items-center'>
                        <Text className='text-white font-semibold'>Popularity</Text>
                        <Text className='text-neutral-300 text-sm'>64.55</Text>
                    </View>
                </View>

                <View className='my-6 mx-4 space-y-2'>
                    <Text className='text-white text-lg'>Biography</Text>
                    <Text className='text-neutral-400 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis perferendis quas, repellat possimus eveniet libero ex eos deserunt provident ea earum unde, quos architecto aperiam officia numquam esse aliquam quis ipsa reiciendis voluptatem corrupti placeat aliquid. Optio aliquam provident cumque natus accusantium odit adipisci nostrum nesciunt iusto veritatis blanditiis animi neque ratione, non consequatur cum.</Text>
                </View>

                <MoviesList title='Movies' movies={movies} hideSeeBtn={true} />
            </View>

        </ScrollView>
    )
}

export default PersonScreen