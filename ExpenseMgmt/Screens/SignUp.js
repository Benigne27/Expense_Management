import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, TextInput } from "react-native-paper";
import Input from "../Components/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function SignUp() {
  return (
    <View>
      <ImageBackground
        source={require("../assets/MoneyCount2.jpg")}
        style={styles.ImgBg}
      >
        <LinearGradient
          style={styles.OpacityBg}
          colors={["transparent", "black"]}
          start={[0, 0.1]}
          end={[0,0.6]}
        >
            <TouchableOpacity style={styles.googleButton}>
                <Image source={require('../assets/GoogleLogo.png')} style={styles.google}/>
                <Text>Sign Up with Google</Text>
            </TouchableOpacity>
            <View style={{height:20}}></View>
            <Text style={styles.Text}>Or</Text>
            <View style={{height:20}}></View>
            <Input placeholder={'Email'} icon={"email-outline"} secureTextEntry={false}/>
        <Input placeholder={'Password'} icon={'key-outline'} secureTextEntry={true}/>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  ImgBg: {
    height: height,
    width: width,
    // transform:[{rotate:'180deg'}]
   
  },
  OpacityBg: {
    height: height,
    width: width,
    opacity: 0.87,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:200
    // justifyContent:'center'
  },
  googleButton:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:70,
    width:350,
    backgroundColor:'white',
    borderRadius:40,
    gap:20
  },
  google:{
    height:30,
    width:30
  },
  Text:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  }
 
});
