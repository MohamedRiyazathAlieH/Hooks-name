import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    firstName: false,
    email: false,
    mobile: false,
    password: false,
  });

  const handleRegister = () => {
    const newError = {
      firstName: !firstName.trim(),
      email: !email.includes("@"),
      mobile: mobile.length < 10,
      password: password.length < 6,
    };
    setError(newError);

    const isValid = Object.values(newError).every((v) => v === false);
    if (isValid) {
      console.log("Company registered successfully!");
      // router.push("/(home)");
    }
  };

  return (
    <View className="flex-1 flex-row bg-white">
      {/* LEFT PANEL */}
      <View className="hidden md:flex w-1/2 bg-white justify-center items-center p-10">
        <View className="max-w-md">
          <Text className="text-3xl font-bold text-[#0A3D62] mb-4 leading-snug">
            Join the <Text className="text-[#1B6CA8]">Talent Connect Platform</Text>
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Create your company account to discover passionate students, post internships and job openings, and build your brand among emerging talent — all in one easy platform.
          </Text>
        </View>
      </View>

      {/* RIGHT PANEL */}
      <View className="flex-1 bg-[#1B6CA8] justify-center items-center p-6">
        <View className="bg-[#1B6CA8] w-full max-w-sm">
          {/* Heading */}
          <Text className="text-white text-2xl font-semibold text-center mb-6">
            Admin Registration Form
          </Text>

          {/* Tabs */}
          <View className="flex-row justify-center mb-8">
            <TouchableOpacity
              onPress={() => router.push("/(home)")}
              className="mx-3 pb-2 border-b-2 border-transparent"
            >
              <Text className="text-base text-gray-300">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mx-3 pb-2 border-b-2 border-white">
              <Text className="text-base text-white font-semibold">Register</Text>
            </TouchableOpacity>
          </View>

          {/* REGISTER FORM */}
          <View className="bg-white rounded-xl p-5 shadow-md">
            {/* Company Name */}
            <TextInput
              placeholder="Company Name"
              placeholderTextColor="#888"
              value={firstName}
              onChangeText={setFirstName}
              className={`rounded-md p-3 mb-2 text-gray-900 text-base border ${
                error.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.firstName && (
              <Text className="text-red-500 text-xs mb-2 ml-1">
                Company name is required
              </Text>
            )}

            {/* Email */}
            <TextInput
              placeholder="E-mail Address"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              className={`rounded-md p-3 mb-2 text-gray-900 text-base border ${
                error.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.email && (
              <Text className="text-red-500 text-xs mb-2 ml-1">
                Enter a valid email address
              </Text>
            )}

            {/* Mobile */}
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={mobile}
              onChangeText={setMobile}
              className={`rounded-md p-3 mb-2 text-gray-900 text-base border ${
                error.mobile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.mobile && (
              <Text className="text-red-500 text-xs mb-2 ml-1">
                Enter a valid mobile number
              </Text>
            )}

            {/* Password */}
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className={`rounded-md p-3 mb-3 text-gray-900 text-base border ${
                error.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.password && (
              <Text className="text-red-500 text-xs mb-3 ml-1">
                Password must be at least 6 characters
              </Text>
            )}

            {/* REGISTER BUTTON */}
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-[#1B6CA8] rounded-md py-3 mt-2.5 shadow-md"
            >
              <Text className="text-white font-semibold text-center text-base">
                Register
              </Text>
            </TouchableOpacity>

            {/* BACK TO LOGIN */}
            <TouchableOpacity
              onPress={() => router.push("/(home)")}
              className="mt-3"
            >
              <Text className="text-[#1B6CA8] text-center underline text-sm">
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}