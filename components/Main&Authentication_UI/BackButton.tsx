import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export function BackButton() {
  const router = useRouter();

  return (
    // Back button on the top left corner 
    <TouchableOpacity
      onPress={() => router.push('/')} // Navigate back to the launch screen
      className="absolute top-20 left-6 z-10 flex-row items-center ">
      <Text className="text-2xl font-bold text-white">{"Go Back"}</Text>
    </TouchableOpacity>
  );
}
