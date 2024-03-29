import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Store from "../redux/Stores/Store.js";

import CartActions from "../redux/actions/CartActions.js";
import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";
import { useDispatch } from "react-redux";

export default function Item(params) {
  const dispatch = useDispatch();
  const item = params.route.params.item;
  let products = Store.getState().CartReducer.products;
  if (products == null) {
    products = [];
  }

  const isInCart = products.map((p) => p.id).includes(item.id);

  let [isInCartState, setIsInCartState] = useState(isInCart);

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
          // Style.button and backgroundColor are merged
          style={[
            Style.button,
            { backgroundColor: isInCartState ? Colors.danger : Colors.primary },
          ]}
          onPress={() => {
            try {
              if (isInCartState) {
                dispatch(CartActions.removeFromCart(item));
                setIsInCartState(false);
              } else {
                dispatch(CartActions.addToCart(item));
                setIsInCartState(true);
              }
              showToast();
            } catch (e) {
              console.error("error saving to cart " + e);
            }
          }}
        >
          <Text style={{ color: Colors.white, textAlign: "center" }}>
            {isInCartState ? "Remove from cart" : "Add to cart"}
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
