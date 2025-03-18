import { Tabs,  } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'
import { Image } from 'react-native';
import ReunionIcon from '@/components/svg_icons/reunion_icon';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#a855f7',
                headerStyle: {
                backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarShowLabel: false,
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
                    <ReunionIcon color={color} />
                )
            }} />
            <Tabs.Screen name="about" options={{ 
                title: 'Sobre',
                tabBarIcon: ({ color, focused }) => (
                    <Entypo name="user" size={24} color={color} />
                )
            }} />
        </Tabs>
    )
}
