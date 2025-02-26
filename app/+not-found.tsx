import { View } from 'react-native'
import { Link, Stack } from 'expo-router'
import "../global.css"

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Eita! Não temos essa página :('}} />
            <View className='justify-center items-center'>
                <Link href="/">Voltar ao início</Link>
            </View>
        </>
    )
}
