import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Fling } from './src/components/Fling';
import { LongPress } from './src/components/LongPress';
import { Pan } from './src/components/Pan';
import { Pinch } from './src/components/Pinch';
import { Rotation } from './src/components/Rotation';
import { Touches } from './src/components/Touches';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <Touches/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
