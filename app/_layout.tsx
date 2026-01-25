//1-Main Global Css
import "./global.css";
//2-Font Imports  
import { IndieFlower_400Regular, useFonts } from "@expo-google-fonts/indie-flower";
import { PlayfairDisplay_700Bold, PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display';
import { Stack } from "expo-router";
//3-Reanimated Logger Config
import { LogBox } from "react-native";




// Suppress Reanimated strict mode warnings
LogBox.ignoreLogs([
  '[Reanimated] Reading from `value` during component render',
]);

/*
 * RootLayout - The root layout component for the entire application
 * In Expo Router, _layout.tsx files define the layout structure for routes.
 * This is the top-level layout that wraps all screens in your app.
 */
export default function RootLayout() {

  // custom fonts using the useFonts hook 
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_900Black,
  });
  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide header for all screens
      }}
    />
  );

}
