import { Tabs,  } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                backgroundColor: '#fff',
                }
            }}
        >
            <Tabs.Screen name="index" options={{ 
                headerTitle: () => (
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require('@/assets/images/logo_roxo.png')}
                        resizeMode="contain"
                    />
                ),
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="about" options={{ title: 'Sobre' }} />
        </Tabs>
    )
}
