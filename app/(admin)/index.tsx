// app/(admin)/index.tsx

import { Text, View } from 'react-native';
import { Stack } from 'expo-router'; // Needed for setting the screen title

export default function AdminDashboardScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-6 items-center justify-center">
      {/* Set the title for this screen in the header */}
      <Stack.Screen options={{ title: "Admin Dashboard" }} />

      <Text className="text-3xl font-extrabold text-blue-700 mb-4">
        Dashboard Overview
      </Text>
      <Text className="text-lg text-gray-600">
        This is your main admin control panel.
      </Text>
    </View>
  );
}