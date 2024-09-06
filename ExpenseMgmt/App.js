import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Debut from "./Screens/Debut";
import HomePage from "./Screens/HomePage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scan from "./Screens/Scan";
import { Icon } from "react-native-elements";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, paddingTop: 20 },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#D0EDFB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                }}
              >
                <Icon
                  name="home-variant-outline"
                  type="material-community"
                  size={30}
                  color={"#5CE1CD"}
                />
              </View>
            ) : (
              <Icon name="home-variant-outline" type="material-community" size={30} />
            ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#F6E3DB",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                }}
              >
                <Icon name="barcode-scan" type="material-community" color={'#F08F5F'}/>
              </View>
            ) : (
              <Icon name="barcode-scan" type="material-community" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Debut" component={Debut} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home1" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
