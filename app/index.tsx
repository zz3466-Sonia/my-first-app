import React from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { Decorations, HeartLiquid } from "../components/doodles";
import { BackgroundVideo, GradientOverlay } from "../components/ui";

// Launch - The launch screen component for the application
export default function Launch() {
  return (
    <View className="flex-1">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Gradient Overlay */}
      <GradientOverlay />

      {/* Decorations around all ui: location in UI already set in respective tsx files */}
      <Decorations />

                                  {/* Main Content */}
      <View className="flex-1 px-6 pt-32 pb-10 justify-between">
        {/* Top Text */}
        <View className="items-center mt-10">
          <Text className="text-white/80 text-sm tracking-[0.25em]">
            WELCOME TO
          </Text>
    
          <Text
            style={{ fontFamily: "IndieFlower_400Regular" }}
            className="text-white text-6xl mt-6"
          >
            Crosspath
          </Text>

          <Text className="text-white/80 mt-4 text-lg tracking-wide">
            Date • Study • Connect
          </Text>

          <Text className="text-white/80 mt-10 text-center text-xl leading-7">
            Cross thousands of miles to{"\n"}meet you
          </Text>
        </View>
 
        {/* Heart Liquid */}
        <View className="-mt-5 items-center opacity-90">
          <HeartLiquid width={150} height={130} fill={0.62} />
        </View>

        {/* Buttons */}
        <View className="w-full">

          {/* Register Button */}
           <Pressable 
            className="bg-white/95 py-4 rounded-full items-center"
            onPress={() => router.push('/register')}
          >
            <Text className="text-black text-lg font-semibold">
              Create Account
            </Text>
          </Pressable>

        {/* Sign In Button */}
          <Pressable 
            className="mt-4 border-2 border-white/80 bg-white/10 py-4 rounded-full items-center"
            onPress={() => router.push('/sign-in')}
          >
            <Text className="text-white text-lg font-semibold">Sign In</Text>
          </Pressable>


          <Text className="text-white/60 text-center mt-8 text-sm">
            Designed for students across campus
          </Text>


        </View>
      </View>
    </View>
  );
}
