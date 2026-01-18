import { Text, View } from "react-native";

/**
 * Index - The home/landing screen of the application
 * 
 * In Expo Router, index.tsx represents the default route ("/") of your app.
 * This is the first screen users see when they open the app.
 * 
 * File-based routing in Expo:
 * - app/index.tsx → matches route "/" (home screen)
 * - app/about.tsx → matches route "/about"
 * - app/profile/[id].tsx → matches route "/profile/:id" (dynamic route)
 * 
 * This component uses NativeWind (Tailwind CSS for React Native):
 * - className prop is used instead of style prop
 * - Tailwind utility classes like "flex-1", "items-center", etc.
 */
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 translate-x-100">
        Welcome to Nativewindddddddddddddddddddddddddddddddddddd!
      </Text>
    </View>
  );
}
