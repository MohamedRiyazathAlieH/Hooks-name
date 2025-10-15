import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const handleLogin = () => {
    // Reset errors
    const newError = { email: false, password: false };
    let hasError = false;

    if (!email.trim()) {
      newError.email = true;
      hasError = true;
    }
    if (!password.trim()) {
      newError.password = true;
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      // Dummy credentials for testing
      const correctEmail = "mohamedriyazath2003alie@gmail.com";
      const correctPassword = "Riyas@2003";

      if (email === correctEmail && password === correctPassword) {
        console.log("Login successful:", { email, password });
        router.push("/dashboard");
      } else {
        setError({ email: true, password: true });
        console.log("Invalid credentials");
      }
    }
  };

  const handleSocialLogin = (provider: "google" | "facebook" | "linkedin") => {
    let url = "";
    switch (provider) {
      case "google":
        url = "https://www.google.com/accounts/sign-in";
        break;
      case "facebook":
        url = "https://www.facebook.com/";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/";
        break;
    }
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View className="flex-1 flex-row bg-white">
      {/* LEFT PANEL */}
      <View className="hidden md:flex w-1/2 bg-white justify-center items-center p-10">
        <View className="max-w-md">
          <Text className="text-3xl font-bold text-[#0A3D62] mb-4 leading-snug">
            Track your application status and career progress{" "}
            <Text className="text-[#1B6CA8]"></Text>
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Access your company dashboard, manage job postings, review applications,
            and connect with talented candidates for internships and full-time 
            positions.
          </Text>
        </View>
      </View>

      {/* RIGHT PANEL */}
      <View className="flex-1 bg-[#1B6CA8] justify-center items-center p-6">
        <View className="bg-[#1B6CA8] w-full max-w-sm">
          {/* Heading */}
          <Text className="text-white text-2xl font-semibold text-center mb-2">
            Admin Login
          </Text>
          <Text className="text-gray-200 text-center mb-8 text-sm">
            Sign in to continue to your Admin account
          </Text>

          {/* Tabs */}
          <View className="flex-row justify-center mb-6">
            <TouchableOpacity className="mx-3 pb-2 border-b-2 border-white">
              <Text className="text-lg text-white font-semibold">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(home)/register")}
              className="mx-3 pb-2 border-b-2 border-transparent"
            >
              <Text className="text-lg text-gray-300">Register</Text>
            </TouchableOpacity>
          </View>

          {/* LOGIN FORM */}
          <View>
            <TextInput
              placeholder="E-mail Address"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              className={`rounded-md p-3 mb-2 text-sm bg-white text-gray-900 border ${
                error.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.email && (
              <Text className="text-red-500 mb-2 text-sm">
                Email is required or invalid
              </Text>
            )}

            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className={`rounded-md p-3 mb-2 text-sm bg-white text-gray-900 border ${
                error.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.password && (
              <Text className="text-red-500 mb-2 text-sm">
                Password is required or invalid
              </Text>
            )}

            {/* LOGIN + FORGOT */}
            <View className="flex-row justify-between items-center mt-1 w-full max-w-sm">
              <TouchableOpacity
                onPress={() => router.push("/(home)/forgot-password")}
              >
                <Text className="text-white underline text-sm">
                  Forgot password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleLogin}
                className="bg-[#1B6CA8] px-6 py-2 rounded-full shadow-xl"
              >
                <Text className="text-white font-semibold text-center text-sm">
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* SOCIAL LOGIN */}
            <View className="flex-row items-center justify-center mt-8">
              <Text className="text-gray-200 text-sm mr-2">Or login with</Text>

              <TouchableOpacity onPress={() => handleSocialLogin("facebook")}>
                <Text className="text-white underline mx-1 text-sm">Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSocialLogin("google")}>
                <Text className="text-white underline mx-1 text-sm">Google</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSocialLogin("linkedin")}>
                <Text className="text-white underline mx-1 text-sm">LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}