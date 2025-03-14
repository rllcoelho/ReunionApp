import { Text, View, StyleSheet } from "react-native";
import "../../global.css"
import { Link } from "expo-router"
import ClimberCard from '@/components/climber_card'

export default function Index() {
  const users = {
    1: { name: 'Rafael', image_source: require('@/assets/images/user-pic-small.jpg'), grade: '5sup', goal: ['Cascavel'] },
    2: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
  }

  return (
     <View className="bg-gray-100 h-screen">
       <ClimberCard user={users[1]}/>
       <ClimberCard user={users[2]} />
    </View>
  );
}
