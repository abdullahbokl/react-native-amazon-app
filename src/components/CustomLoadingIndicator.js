import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Colors from "../theme/Colors";

const CustomLoadingIndicator = ({ size = 40, color = Colors.white }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default CustomLoadingIndicator;
