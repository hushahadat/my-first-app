import { View, Text } from "react-native";
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">First Aoora App</Text>
      <Link href='/home' style={{color:"blue"}}>Go to Home</Link>
    </View>
  );
}