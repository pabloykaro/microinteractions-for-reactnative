import { View, Dimensions, StyleSheet } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const START = 24;
const LIMIT = Dimensions.get("window").width - 124;

export function Fling() {
  const positionForHorizontal = useSharedValue(START);

  const directionToRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      positionForHorizontal.value = withTiming(LIMIT, { duration: 500 });
    });
  const directionToLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      positionForHorizontal.value = withTiming(START, { duration: 500 });
    });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positionForHorizontal.value }],
  }));
  return (
    <View style={stylesFling.container}>
      <GestureDetector
        gesture={Gesture.Exclusive(directionToRight, directionToLeft)}
      >
        <Animated.View style={[stylesFling.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const stylesFling = StyleSheet.create({
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
