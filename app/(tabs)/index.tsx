import { Text, View, StyleSheet } from "react-native";
import "../../global.css"
import { Link } from "expo-router"

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-700">
      <Text className="bg-green-300 text-3xl font-bold">A vida não é útil.</Text>
      <Link href="/about" className="bg-red-300 text-x1 color-white" style={{ textDecorationLine: 'underline' }}>Sobre</Link>
    </View>
  );
}
