import React, { Component } from "react";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const Swinging = ({
  amplitude,
  rotation = 7,
  delay,
  duration = 700,
  children
}) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${rotation}deg`
      },
      0.5: {
        translateX: 0,
        translateY: 0,
        rotate: "0deg"
      },
      1: {
        translateX: amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${-rotation}deg`
      }
    }}
    delay={delay}
    duration={duration}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver
  >
    {children}
  </Animatable.View>
);

export default Swinging;
