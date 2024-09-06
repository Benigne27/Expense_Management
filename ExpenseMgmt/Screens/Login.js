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
  
  export default function Login({navigation}) {
    return (
      <View>
        <ImageBackground
          source={require("../assets/MoneyCount1.jpg")}
          style={styles.ImgBg}
        >
          <LinearGradient
            style={styles.OpacityBg}
            colors={["transparent", "black"]}
            start={[0, 0.1]}
            end={[0,0.6]}
          ></LinearGradient>
              <TouchableOpacity style={styles.googleButton}>
                  <Image source={require('../assets/GoogleLogo.png')} style={styles.google}/>
                  <Text style={styles.SignText}>Log In with Google</Text>
              </TouchableOpacity>
              <View style={{height:20}}></View>
              <Text style={styles.Text}>Or</Text>
              <View style={{height:20}}></View>
              <Input placeholder={'Email'} icon={"email"} secureTextEntry={false}/>
          <Input placeholder={'Password'} icon={'key'} secureTextEntry={true}/>
          <View style={{height:30}}></View>
          <TouchableOpacity style={styles.LogButton} onPress={()=>navigation.navigate('Home1')}>
              <Text style={styles.LogText}>Log In</Text>
          </TouchableOpacity>
          <View style={{height:30}}></View>
          <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              color:'white'
            }}
          >
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  color: "#69AEA9",
                  fontSize: 15,
                  fontWeight: "bold",
                  top: 2,
                }}
              >
                {" "}
               Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    ImgBg: {
      height: height,
      width: width,
      position:'relative',
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-end',
      paddingBottom:50,
      // transform:[{rotate:'180deg'}]
     
    },
    OpacityBg: {
      height: height,
      width: width,
      opacity: 0.87,
     
      position:'absolute'
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
      gap:10
    },
    google:{
      height:30,
      width:30
    },
    Text:{
      fontSize:20,
      color:'white',
      fontWeight:'bold'
    },
    SignText:{
      fontSize:20
    },
    LogButton:{
      display:"flex",
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      height:70,
      width:350,
      backgroundColor:'#69AEA9',
      borderRadius:40,
      shadowOffset:{width:3, height:3},
      shadowColor:'white',
      shadowOpacity:0.4
    },
    LogText:{
      color:'white',
      fontSize:20,
      fontWeight:'bold'
    }
   
  });
  