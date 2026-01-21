import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';


                                    // Typescript types
type AuthFormProps = {
  mode: 'signin' | 'register';                            // this determines whether it's sign-in or register form
  onSubmit?: (email: string, password: string) => void;   // callback for form submission
  onForgotPassword?: () => void;                         // callback for forgot password (only for sign-in)
  onToggleMode?: () => void;                             // callback to toggle between sign-in and register modes
};

                                    // AuthForm Component
export default function AuthForm({
  mode,//1-'signin' or 'register'  
  //2-Callbacks             
  onSubmit,
  onForgotPassword,
  onToggleMode,
  }
                //3-Props type
 :AuthFormProps) {

  //3.1-States(the input values)
  const [email, setEmail] = useState('');                
  const [password, setPassword] = useState('');          
  const [rememberMe, setRememberMe] = useState(false);

  //3.2-Determine if the form is for sign-in
  const isSignIn = mode === 'signin';
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <View className="bg-white rounded-3xl p-10 w-[85%] max-w-md shadow-lg">

      {/* Header */}
      <Text 
        className="text-5xl text-center mb-3 text-gray-900"
        style={{ fontFamily: 'PlayfairDisplay_900Black' }}
      >
        {isSignIn ? 'Welcome Back' : 'Create Account'}
      </Text>
      <Text className="text-center text-gray-400 text-base mb-10">
        {isSignIn ? 'Sign in to continue' : 'Sign up to get started'}
      </Text>

      {/* Email Input */}
      <TextInput
        className="bg-gray-100 rounded-2xl px-5 py-4 mb-5 text-base text-gray-900 border border-gray-200"
        placeholder="School Email (.edu addresses only)"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        className="bg-gray-100 rounded-2xl px-5 py-4 mb-5 text-base text-gray-900 border border-gray-200"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember Me & Forgot Password */}
      {isSignIn && (
        <View className="flex-row justify-between items-center mb-8">
          <Pressable
            onPress={() => setRememberMe(!rememberMe)}
            className="flex-row items-center"
        >
            <View
              className={`w-5 h-5 rounded-md border-2 mr-2 ${
                rememberMe ? 'bg-red-400 border-red-400' : 'border-gray-300'
              }`}
            />
            <Text className="text-gray-700 font-medium">Remember me</Text>
          </Pressable>

          <TouchableOpacity onPress={onForgotPassword}>
            <Text className="text-red-400 font-semibold">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-red-400 rounded-2xl py-5 mb-8 active:opacity-80"
      >
        <Text className="text-white text-center text-lg font-bold">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      {/* Toggle Mode To Go From Reigster to Signup and Viceversa */}
      <View className="flex-row justify-center">

        <Text className="text-gray-500">
          {isSignIn ? "Don't have an account? " : 'Already have an account? '} {/* Text To accompany the toggle */}
        </Text>

        <TouchableOpacity onPress={onToggleMode}>
          <Text className="text-red-500 font-bold">
            {isSignIn ? 'Sign Up' : 'Sign In'} {/* Toggle*/}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
