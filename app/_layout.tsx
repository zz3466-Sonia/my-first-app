import "./global.css"; // Import global CSS styles that will be applied throughout the entire app
import { IndieFlower_400Regular, useFonts } from "@expo-google-fonts/indie-flower";
import { Stack } from "expo-router";

/*
 * RootLayout - The root layout component for the entire application
 * 
 * In Expo Router, _layout.tsx files define the layout structure for routes.
 * This is the top-level layout that wraps all screens in your app.
 * 
 * Stack - A navigation component that provides a stack-based navigation pattern
 * (like a deck of cards where you can push/pop screens). Each screen slides
 * in from the right and can navigate back to the previous screen.
 * 
 * Any screen files in the /app directory (like index.tsx) will automatically
 * become routes within this Stack navigator.
 */
export default function RootLayout() {

  // custom fonts using the useFonts hook 
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
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
