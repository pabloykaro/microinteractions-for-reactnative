import { View, Pressable, StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from 'react-native-reanimated';


export function Touches() {
  const position = useSharedValue(100);
  const doubleTapActive = useSharedValue(0);

  function onPressIn() {
    position.value = withSpring(150);
  }

  function onPressOut() {
    position.value = withSpring(100);
  }

  const onGesture = Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(() => {
      doubleTapActive.value = withTiming(doubleTapActive.value === 0 ? 1 : 0, { duration: 500 })
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: position.value,
    height: position.value,
    backgroundColor: interpolateColor(doubleTapActive.value, [0, 1], ['#8527e5', '#bf5a07'])
  }));

  return (
    <View style={stylesTouches.container}>
      <GestureDetector gesture={onGesture}>
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
          <Animated.View style={[stylesTouches.box, animatedStyle]} />
        </Pressable>
      </GestureDetector>
    </View>
  )
}

const stylesTouches = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 12,
  }
});