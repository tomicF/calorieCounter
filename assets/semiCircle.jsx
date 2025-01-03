import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const SemiCircularRing = () => {
  return (
    <View style={styles.ringContainer}>
      <Svg height="500" width="300" viewBox="0 0 200 200">
        {/* Outer semi-circle */}
        <Path
          d="M50,100 A80,80 0 1,1 150,100"
          stroke="black"
          strokeWidth="30"
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default SemiCircularRing;

const styles = StyleSheet.create({
  ringContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
