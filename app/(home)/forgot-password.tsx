import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
 
export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
 
  return (
    <View className="flex-1 bg-[#1B6CA8] justify-center items-center p-6">
      <View className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-md">
        <Text className="text-[#1B6CA8] text-2xl font-semibold text-center mb-6">
          Reset Password
        </Text>
 
        <TextInput
          placeholder="Enter your Username or Email"
          value={username}
          onChangeText={setUsername}
          className="bg-gray-100 rounded-md p-3 mb-5 text-gray-800"
        />
 
        <TouchableOpacity
          onPress={() => router.push("/(home)/set-password")}
          className="bg-[#1B6CA8] rounded-md py-3"
        >
          <Text className="text-white text-center font-semibold">Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}