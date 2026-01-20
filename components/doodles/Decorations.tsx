import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export function Decorations() {
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
