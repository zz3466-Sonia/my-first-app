import React from "react";
import Svg, { Path } from "react-native-svg";

export function SketchHeart() {
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
