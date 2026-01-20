import { View, Text } from "react-native";
import { BackgroundVideo } from "../components/ui";

export default function SignIn() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      {/* Background Video */}
      <BackgroundVideo />

      {/*Current PlaceHolder */}
      <Text className="text-2xl">Sign In Screen</Text>
    </View>
  );
}