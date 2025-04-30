import { View, TextInput } from "react-native";
import "../../global.css"
import { Link } from "expo-router"
import ClimberCard from '@/components/climber_card'

export default function Index() {
  const users = {
    1: { name: 'Rafael', image_source: require('@/assets/images/user-pic-small.jpg'), grade: '6sup', goal: ['Cascavel'] },
    2: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
    3: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
    4: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
    5: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
    6: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
    7: { name: 'Cabra', image_source: require('@/assets/images/user-cabra.jpg'), grade: '7b', goal: ['Jardineiro', 'Arco da Toca']},
  }

  return (
    <View className="bg-gray-100 h-screen">
      <TextInput
        placeholder="Search..."
        className="p-2 m-4 border border-gray-300 rounded"
        editable={true}
      />
      <ClimberCard user={users[1]} />
      <ClimberCard user={users[2]} />
      {/* <ClimberCard user={users[3]} />
      <ClimberCard user={users[4]} />
      <ClimberCard user={users[5]} />
      <ClimberCard user={users[6]} />
      <ClimberCard user={users[7]} /> */}
    </View>
  );
}
