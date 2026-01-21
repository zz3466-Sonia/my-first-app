import { View } from "react-native";
import { BackgroundVideo, BackButton, AuthForm } from "../components/Main&Authentication_UI";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = (email: string, password: string) => {
    console.log('Sign in with:', email, password); //this is just a placeholder
  };

  const handleForgotPassword = () => {
    console.log('Forgot password'); //this is just a placeholder
  };

  const handleToggleMode = () => {
    router.push('/register'); //this is the toggle to register page
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Back Button */}
      <BackButton />

      {/* Auth Form */}
      <AuthForm
        mode="signin"
        onSubmit={handleSignIn}
        onForgotPassword={handleForgotPassword}
        onToggleMode={handleToggleMode}
      />
    </View>
  );
}