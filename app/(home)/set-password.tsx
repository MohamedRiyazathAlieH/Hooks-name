import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
 
export default function SetPasswordScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  return (
    <View className="flex-1 bg-[#1B6CA8] justify-center items-center p-6">
      <View className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-md">
        <Text className="text-[#1B6CA8] text-2xl font-semibold text-center mb-6">
          Set New Password
        </Text>
 
        <TextInput
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
          className="bg-gray-100 rounded-md p-3 mb-3 text-gray-800"
        />
        <TextInput
          placeholder="New Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="bg-gray-100 rounded-md p-3 mb-3 text-gray-800"
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="bg-gray-100 rounded-md p-3 mb-5 text-gray-800"
        />
 
        <TouchableOpacity
          onPress={() => router.push("/(home)")}
          className="bg-[#1B6CA8] rounded-md py-3"
        >
          <Text className="text-white text-center font-semibold">
            Set Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}