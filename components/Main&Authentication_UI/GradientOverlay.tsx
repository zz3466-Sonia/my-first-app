import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export function GradientOverlay() {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.45)"]}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
}
