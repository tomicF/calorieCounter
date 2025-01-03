import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import SemiCircularRing from "../assets/semiCircle.jsx";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backGroundImage}
        source={require("../assets/images/background.png")}
        blurRadius={70}
      >
        <SemiCircularRing />
        <View style={styles.fillBlock}></View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  fillBlock: {},
});
