import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from '../theme'
import MoviesList from '../components/MoviesList'
import { API_BASE_URL, API_IMAGE_URL, API_KEY } from '../constants'

const ios = Platform.OS === 'ios';

const PersonScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const [isFavourite, setIsFavourite] = useState(false);

    const [personDetails, setPersonDetails] = useState({});
    const [personMovies, setPersonMovies] = useState([]);

    const getPersonDetails = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/person/${params.id}?language=en-US&api_key=${API_KEY}`);
            const data = await res.json();
            data && setPersonDetails(data);
        } catch (error) {
            console.error('error getting person details : ', error);
        }
    }
    
    const getPersonMovies = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/person/${params.id}/movie_credits?language=en-US&api_key=${API_KEY}`);
            const data = await res.json();
            data && data.cast && setPersonMovies(data.cast);
        } catch (error) {
            console.error('error getting person movies : ', error);
        }
    }

    useEffect(() => {
        getPersonDetails();
        getPersonMovies();
      return () => {}
    }, [params])
    

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
                        <Image source={{ uri: API_IMAGE_URL + params.profile_path }} style={{ height: height * 0.43, width: '100%' }} />
                    </View>
                </View>

                <View className='my-4'>
                    <Text className='text-3xl text-center text-white font-bold'>{params.name}</Text>
                    <Text className='text-base text-center text-neutral-500 font-semibold'>{personDetails?.place_of_birth}</Text>
                </View>
                <View className='mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full'>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 text-sm'>
                            {personDetails?.gender === 1 ? 'Female' : personDetails?.gender === 2 ?  'Male' : 'Other'}
                            </Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Bithday</Text>
                        <Text className='text-neutral-300 text-sm'>{personDetails?.birthday}</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Known for</Text>
                        <Text className='text-neutral-300 text-sm'>{personDetails.known_for_department}</Text>
                    </View>
                    <View className='px-2 items-center'>
                        <Text className='text-white font-semibold'>Popularity</Text>
                        <Text className='text-neutral-300 text-sm'>{personDetails?.popularity}</Text>
                    </View>
                </View>

                <View className='my-6 mx-4 space-y-2'>
                    <Text className='text-white text-lg'>Biography</Text>
                    <Text className='text-neutral-400 tracking-wide'>{personDetails?.biography}</Text>
                </View>

                <MoviesList title='Movies' movies={personMovies} hideSeeBtn={true} />
            </View>

        </ScrollView>
    )
}

export default PersonScreen