import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";

export default function Item() {
  return (
    <View style={Style.container}>
      <Text>Item</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    // white
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.primaryAccent,
  },
  card: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: Metrics.FontSize(16),
    color: Colors.dark,
  },
});
