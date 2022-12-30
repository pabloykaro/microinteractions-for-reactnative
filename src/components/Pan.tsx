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


export function Pan() {
  const positionInHorizontal = useSharedValue(0);

  const rotationForHorizontal = Gesture
  .Pan()
  .minPointers(2)
  .onUpdate((event) => {
    positionInHorizontal.value = event.translationX;
    if(event.translationX >= 0){
      console.log('Estou indo para a direita.');
    }else{
      console.log('Estou indo para a esquerda.');
    }
  })
 
  const animatedStyle = useAnimatedStyle(() => ({
   transform: [{translateX: positionInHorizontal.value}]
  }));
  return (
    <View style={stylesPan.container}>
      <GestureDetector
        gesture={rotationForHorizontal}
      >
        <Animated.View style={[stylesPan.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const stylesPan = StyleSheet.create({
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
