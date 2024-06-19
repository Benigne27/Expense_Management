import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Debut from './Screens/Debut';
import HomePage from './Screens/HomePage';

export default function App() {
  return (
    <View>
      {/* <Debut/> */}
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
