import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Debut() {
  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <View>
        <Image
          source={require("../assets/Man_coins.png")}
          style={styles.ManImage}
        />
      </View>
      <View style={{ height: 120 }}></View>
      <Text style={styles.SaveText}>Spend Smarter {"\n"} Save More</Text>
      <View style={{ height: 50 }}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={{ height: 50 }}></View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Already have an account?
          <TouchableOpacity>
            <Text
              style={{ color: "#69AEA9", fontSize: 15, fontWeight: "bold", top:2 }}
            >
              {" "}
              Log In
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: height,
    width: width,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  ManImage: {
    height: 400,
    width: 300,
    top: 80,
  },
  SaveText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "900",
    color: "#438883",
  },
  button: {
    height: 60,
    width: 300,
    backgroundColor: "#69AEA9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
});
