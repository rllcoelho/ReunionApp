import { Text, View, TextInput, Button } from 'react-native';
import "../../global.css";

export default function ProfileScreen() {
    return (
        <View className="flex-1 p-5 bg-gray-700 justify-center">
            <Text className="text-white text-lg mb-4">Edit Profile</Text>
            <TextInput
                className="bg-gray-800 text-white p-3 mb-4 rounded"
                placeholder="Name"
                placeholderTextColor="#aaa"
            />
            <TextInput
                className="bg-gray-800 text-white p-3 mb-4 rounded"
                placeholder="Email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
            />
            <TextInput
                className="bg-gray-800 text-white p-3 mb-4 rounded"
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
            />
            <Button title="Save Changes" onPress={() => alert('Profile updated!')} />
        </View>
    );
}
