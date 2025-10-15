// app/(admin)/_layout.tsx
import React from "react";
import { Stack, useRouter } from "expo-router";

export default function AdminLayout() {
  const router = useRouter();

  // ✅ Replace this with your real admin logic later
  const MOCK_IS_ADMIN = true;

  // ✅ PROTECTION LOGIC (safe for both v2 & v3)
  React.useEffect(() => {
    if (!MOCK_IS_ADMIN) {
      router.replace("../index");
    }
  }, [MOCK_IS_ADMIN]);

  // ✅ NAVIGATION STACK
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1d4ed8" }, // Tailwind blue-700
        headerTintColor: "#fff",
        headerBackVisible: false,
      }}
    >
      {/* Main admin page: app/(admin)/index.tsx */}
      <Stack.Screen
        name="index"
        options={{
          title: "Admin Home",
          headerShown: true,
        }}
      />

      {/* Example secondary screen */}
      {/* 
      <Stack.Screen
        name="users"
        options={{
          title: "User Management",
        }}
      /> 
      */}
    </Stack>
  );
}
