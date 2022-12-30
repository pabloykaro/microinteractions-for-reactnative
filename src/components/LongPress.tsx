import { View, StyleSheet } from "react-native";
import {
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";


export function LongPress() {
  const size = useSharedValue(100);

  const buttonWithEffectionLongPress = Gesture
  .LongPress()
  .onTouchesDown(() => {
    size.value = withTiming(size.value+200, {duration: 500});
  })
  .onEnd((e, success) => {
   if(success){
    console.log(`Tempo de duração do long press é ${e.duration} ms`);
    size.value = withTiming(100, {duration: 500});
   }
  });
 
  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value
  }));
  return (
    <View style={stylesFling.container}>
      <GestureDetector
        gesture={buttonWithEffectionLongPress}
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
