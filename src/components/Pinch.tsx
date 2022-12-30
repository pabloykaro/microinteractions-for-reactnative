import { View, StyleSheet } from "react-native";
import {
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";


export function Pinch() {
  const scale = useSharedValue(1);

  const rotationScale = Gesture
  .Pinch()
  .onUpdate((event) => {
     scale.value = event.scale;
  });
 
  const animatedStyle = useAnimatedStyle(() => ({
   transform: [{scale: scale.value}]
  }));
  return (
    <View style={stylesPinch.container}>
      <GestureDetector
        gesture={rotationScale}
      >
        <Animated.View style={[stylesPinch.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const stylesPinch = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 12,
  },
});
