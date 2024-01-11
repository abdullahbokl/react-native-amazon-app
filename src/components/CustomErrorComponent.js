import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";

export default function CustomErrorComponent({ error }) {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>{error}</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: Metrics.FontSize(20),
    fontWeight: "bold",
  },
});
