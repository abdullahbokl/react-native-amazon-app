import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";

export default function Item(params) {
  const navigation = useNavigation();
  const item = params.route.params.item;
  return (
    <View style={Style.container}>
      {/* Title and desc */}
      <View>
        <Text style={Style.text}>{item.title}</Text>

        <Text style={Style.text}>{item.description}</Text>
      </View>

      <View style={Style.image}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View>
        <Text style={Style.text}>{item.price}</Text>
        {/* add to cart button */}
        <TouchableOpacity
          style={Style.button}
          onPress={async () => {
            try {
              await AsyncStorage.setItem("cart", item.id.toString());
              console.log("saved to cart");
            } catch (e) {
              console.log("error saving to cart " + e);
            }
          }}
        >
          <Text style={{ color: Colors.white, textAlign: "center" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "start",
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
    width: "100%",
    height: "40%",
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: Metrics.FontSize(16),
    color: Colors.dark,
    fontWeight: "bold",
    padding: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    borderRadius: 10,
    padding: 10,
    height: 60,
    margin: 20,
    justifyContent: "center",
  },
});
