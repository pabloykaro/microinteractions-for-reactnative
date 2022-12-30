import { View, StyleSheet } from "react-native";
import {
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";


export function Rotation() {
  const rotation = useSharedValue(0);

  const rotationGesture = Gesture
  .Rotation()
  .onUpdate((event) => {
    rotation.value = event.rotation;
  });
 
  const animatedStyle = useAnimatedStyle(() => ({
   transform: [{rotateZ: `${(rotation.value / Math.PI) * 180}deg`}]
  }));
  return (
    <View style={stylesRotation.container}>
      <GestureDetector
        gesture={rotationGesture}
      >
        <Animated.View style={[stylesRotation.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const stylesRotation = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 12,
  },
});
