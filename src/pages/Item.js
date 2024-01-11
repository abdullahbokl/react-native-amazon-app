import React from "react";
import Toast from "react-native-toast-message";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import CartActions from "../redux/actions/CartActions.js";
import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";
import { useDispatch } from "react-redux";

export default function Item(params) {
  const dispatch = useDispatch();
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
          source={{ uri: item.images[0] }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      {/* Price */}
      <View>
        <Text style={Style.text}>Price: {item.price}$</Text>
      </View>
      {/* Add to cart button */}
      <View>
        <TouchableOpacity
          style={Style.button}
          onPress={() => {
            try {
              dispatch(CartActions.addToCart(item));
              showToast();
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
    height: "50%",
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

const showToast = () => {
  Toast.show({
    type: "success",
    position: "bottom",
    text1: "Added to cart",
    visibilityTime: 1000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};
