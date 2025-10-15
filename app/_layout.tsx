// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import "@/global.css";
import { Provider as StoreProvider } from 'react-redux';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts as useMontserrat, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import store from '@/store/index';


export const unstable_settings = {
  anchor: '(home)',
};


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#007bff",
    secondary: "#ff9800",
  },
};


export default function RootLayout() {
   const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

   const [montserratLoaded] = useMontserrat({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {return null}; // or splash screen

  return (
    <PaperProvider theme={theme}>

      <StoreProvider store={store}>
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" options={{ headerShown: true }} />
        </Stack>
        <StatusBar style="auto" />
      </StoreProvider>
    </PaperProvider>
      
  );
}
