import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Debut from './Screens/Debut';
import HomePage from './Screens/HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';

const Stack= createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Debut' component={Debut}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Home' component={HomePage}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

