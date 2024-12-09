import React, { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const VantaBackground = ({ weatherType }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    // Инициализация Vanta
    vantaEffectRef.current = CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      THREE,
    });

    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (!vantaEffectRef.current) return;

    // Цвета для разных погодных условий
    const weatherColors = {
      clear: {
        skyColor: 0x96d7ed,
        cloudColor: 0xd7e1f2,
        cloudShadowColor: 0x62788e,
        sunGlareColor: 0xffc1ad,
        sunlightColor: 0xffc1ad,
      },
      clouds: {
        skyColor: 0x8ba1b3,
        cloudColor: 0xa9bcd9,
        cloudShadowColor: 0x5a5a5a,
        sunGlareColor: 0xd0d0d0,
        sunlightColor: 0xb0b0b0,
      },
      rain: {
        skyColor: 0x8ba1b3,
        cloudColor: 0xa9bcd9,
        cloudShadowColor: 0x5a5a5a,
        sunGlareColor: 0xd0d0d0,
        sunlightColor: 0xb0b0b0,
      },
      snow: {
        skyColor: 0xa9bcd9,
        cloudColor: 0xa9bcd9,
        cloudShadowColor: 0x5a5a5a,
        sunGlareColor: 0xd0d0d0,
        sunlightColor: 0xb0b0b0,
      },
      mist: {
        skyColor: 0x8ba1b3,
        cloudColor: 0xa9bcd9,
        cloudShadowColor: 0x5a5a5a,
        sunGlareColor: 0xd0d0d0,
        sunlightColor: 0xb0b0b0,
      },
      thunderstorm: {
        skyColor: 0x1c1c1c,
        cloudColor: 0xa9bcd9,
        cloudShadowColor: 0xa8a8a8,
        sunGlareColor: 0xe0e0e0,
        sunlightColor: 0xf5f5f5,
      },
    };

    const colors = weatherColors[weatherType] || weatherColors.clear;

    // Обновление параметров Vanta
    vantaEffectRef.current.setOptions({
      skyColor: colors.skyColor,
      cloudColor: colors.cloudColor,
      cloudShadowColor: colors.cloudShadowColor,
      sunGlareColor: colors.sunGlareColor,
      sunlightColor: colors.sunlightColor,
    });
  }, [weatherType]);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default VantaBackground;
