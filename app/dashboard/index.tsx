import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  function redirectTo() {
    router.push('/'); // ✅ use push or replace instead of navigate
  }

  return (
    <View style={styles.container}>
      <Text>Dashn</Text>
      <Button title="Back to home" onPress={redirectTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
