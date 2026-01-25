import React, { useEffect, useMemo } from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function HeartLiquid({
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
