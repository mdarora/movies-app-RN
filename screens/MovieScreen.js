import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles, theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';

const ios = Platform.OS === 'ios';

const MovieScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  const [isFavourite, setIsFavourite] = useState(false);
  const movieName = 'Ant-Man and the Wasp: Quantumania';

  useLayoutEffect(() => {
    // api call here
  }, [params]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className='flex-1 bg-neutral-900'
    >
      <View className='w-full'>

        <SafeAreaView className={`absolute z-20  left-2 right-2 flex-row justify-between items-center ${ios ? '' : 'mt-3'}`}>
          <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            <HeartIcon size={30} strokeWidth={2.5} color={isFavourite ? theme.text : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require('../assets/images/moviePoster2.png')}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23,23,23, 1)']}
            style={{ width, height: height * 0.40 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>
          <Text className='text-white text-center text-3xl font-bold tracking-wider'>{movieName}</Text>
          <Text className='text-neutral-400 text-base text-center font-semibold'>Released • 2020 • 170 min</Text>
          <Text className='text-neutral-400 text-base text-center font-semibold'>Action • Thrill • Comedy</Text>
          <Text className='text-neutral-400 mx-4 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro, expedita odit culpa adipisci commodi aliquid fugiat. Sequi explicabo unde illum quae? Quisquam, dolorum dolor iure debitis distinctio aut reiciendis unde harum. Necessitatibus, doloribus aperiam.</Text>
        </View>

        <Cast/>
      </View>
    </ScrollView>
  )
}

export default MovieScreen