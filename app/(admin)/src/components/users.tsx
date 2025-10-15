// app/(admin)/users.tsx

import { Text, View } from 'react-native';

export default function AdminUsersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-xl font-bold">Admin Users Management</Text>
      <Text className="text-base text-gray-600 mt-2">List, create, or delete users.</Text>
    </View>
  );
}