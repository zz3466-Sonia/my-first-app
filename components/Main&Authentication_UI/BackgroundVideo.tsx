import { ResizeMode, Video } from "expo-av";
import React from "react";

export function BackgroundVideo() {
  return (
    <Video
      source={require("../../assets/Minimalist Beautiful Life Quotes Video.mp4")}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      resizeMode={ResizeMode.COVER}
      shouldPlay
      isLooping
      isMuted
    />
  );
}
