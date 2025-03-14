import { View, StyleSheet, Text } from 'react-native';
import { Image, type ImageSource } from 'expo-image'
import "../global.css"

type ClimberCardProps = {
    user: {
        name: string,
        image_source: ImageSource,
        grade: string,
        goal: string[]
    }
}

export default function ClimberCard ({ user }: ClimberCardProps ) {
    return (
        <View className='shadow-lg flex !flex-row flex-nowrap w-full bg-white rounded-lg p-4 leading-normal'>
            <Image
            source={user.image_source}
            style={{ width: 100, height: 100, borderRadius: 10  , marginRight: 10 }}
            />
            <View className='text-left'>
                <View className='flex-row'>
                    <Text className='text-xl'>{user.name}, </Text>
                    <Text className='text-xl text-purple-500'>{user.grade}</Text>
                </View>
                <Text className='text-gray-500'>Objetivo: {user.goal.join(', ')}</Text>
            </View>
        </View>
    )
}