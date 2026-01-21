import { View } from "react-native";
import { BackgroundVideo, BackButton, AuthForm } from "../components/Main&Authentication_UI";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  const handleRegister = (email: string, password: string) => {
    console.log('Register with:', email, password); //this is just a placeholder
  };

  const handleToggleMode = () => {
    router.push('/sign-in'); //this is the toggle to sign-in page
  };

  return (
    <View className="flex-1 justify-center items-center bg-pink-100">
      {/* Background Video */}
      <BackgroundVideo />
      {/* Back Button */}
      <BackButton />

      {/* Auth Form */}
      <AuthForm
        mode="register"
        onSubmit={handleRegister}
        onToggleMode={handleToggleMode}
      />
    </View>
  );
}