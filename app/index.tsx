import { IndieFlower_400Regular, useFonts } from "@expo-google-fonts/indie-flower";
import { Feather } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";




export default function Launch() {
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1">
      {/* Background Video */}
      <Video
        source={require("../assets/Minimalist Beautiful Life Quotes Video.mp4")}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.45)"]}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />

      {/* Decorations */}
      <Decorations />

      {/* Content */}
      <View className="flex-1 px-6 pt-16 pb-10 justify-between">
        {/* Top Text */}
        <View className="items-center">
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
        <View className="mt-5 items-center opacity-90">
          <HeartLiquid width={150} height={130} fill={0.62} />
          </View>

        {/* Buttons */}
        <View className="w-full">
          <Pressable className="bg-white/95 py-4 rounded-full items-center">
            <Text className="text-black text-lg font-semibold">
              Create Account
            </Text>
          </Pressable>

          <Pressable className="mt-4 border-2 border-white/80 bg-white/10 py-4 rounded-full items-center">
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

function Decorations() {
  const items = [
    { top: 120, left: 36, name: "heart", size: 18, color: "rgba(255,180,205,0.85)" },
    { top: 160, right: 52, name: "star", size: 18, color: "rgba(255,226,155,0.85)" },
    { top: 260, left: 68, name: "star", size: 14, color: "rgba(196,181,253,0.85)" },
    { top: 340, right: 34, name: "send", size: 18, color: "rgba(167,243,208,0.85)" },
    { top: 420, left: 30, name: "heart", size: 14, color: "rgba(251,207,232,0.75)" },
    { bottom: 260, right: 66, name: "star", size: 16, color: "rgba(253,230,138,0.8)" },
    { bottom: 220, left: 58, name: "send", size: 16, color: "rgba(191,219,254,0.8)" },
    { bottom: 180, right: 30, name: "heart", size: 16, color: "rgba(244,114,182,0.65)" },
  ] as const;

  return (
    <View style={{ position: "absolute", inset: 0 }}>
      {items.map((it, idx) => {
        const style: any = { position: "absolute" };
        if ("top" in it) style.top = it.top;
        if ("left" in it) style.left = it.left;
        if ("right" in it) style.right = it.right;
        if ("bottom" in it) style.bottom = it.bottom;

        return (
          <View key={idx} style={style}>
            <Feather name={it.name as any} size={it.size} color={it.color} />
          </View>
        );
      })}
    </View>
  );
}

function SketchHeart() {
  return (
    <Svg width={120} height={100} viewBox="0 0 120 100">
      <Path
        d="M60 90
           C20 60, 5 35, 25 20
           C45 5, 60 20, 60 30
           C60 20, 75 5, 95 20
           C115 35, 100 60, 60 90"
        fill="none"
        stroke="rgba(255,200,220,0.8)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

function HeartLiquid({
  width = 150,
  height = 130,
  fill = 0.6, // 0~1：装到多少
}: {
  width?: number;
  height?: number;
  fill?: number;
}) {
  const phase = useSharedValue(0);

  useEffect(() => {
    phase.value = withRepeat(
      withTiming(2 * Math.PI, { duration: 2200, easing: Easing.linear }),
      -1,
      false
    );
  }, [phase]);

  const heartPath = useMemo(
    () =>
      `M60 90
       C20 60, 5 35, 25 20
       C45 5, 60 20, 60 30
       C60 20, 75 5, 95 20
       C115 35, 100 60, 60 90`,
    []
  );

  const vbW = 120;
  const vbH = 100;
  const liquidY = (1 - fill) * vbH;

  const animatedProps = useAnimatedProps(() => {
    const A = 3.5; // 波浪高度
    const k = (2 * Math.PI) / 40; // 波长
    const p = phase.value;

    const left = -20;
    const right = vbW + 20;

    const steps = 10;
    const dx = (right - left) / steps;

    let d = `M ${left} ${vbH + 20} L ${left} ${liquidY}`;
    for (let i = 0; i <= steps; i++) {
      const x = left + i * dx;
      const y = liquidY + A * Math.sin(k * x + p);
      d += ` L ${x} ${y}`;
    }
    d += ` L ${right} ${vbH + 20} Z`;
    return { d };
  });

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${vbW} ${vbH}`}>
      <Defs>
        <ClipPath id="heartClip">
          <Path d={heartPath} />
        </ClipPath>
      </Defs>

      <G clipPath="url(#heartClip)">
        {/* 水底色 */}
        <Path
          d={`M -20 ${vbH + 20} H ${vbW + 20} V ${vbH + 20} Z`}
          fill="rgba(255,140,180,0.22)"
        />
        {/* 动态波浪水面 */}
        <AnimatedPath
          animatedProps={animatedProps}
          fill="rgba(255,140,180,0.55)"
        />
      </G>

      {/* 外轮廓 */}
      <Path
        d={heartPath}
        fill="none"
        stroke="rgba(255,200,220,0.95)"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

