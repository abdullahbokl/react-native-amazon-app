import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Cart() {
  // fetch all items ids from cart

  useEffect(() => {
    AsyncStorage.getItem("cart")
      .then((value) => {
        if (value !== null) {
          console.log("value is  " + value);
          //  value is a ids with type string
          return value.split(",");
        }
      })
      .catch((e) => {
        console.error("error getting cart " + e);
      });
  }, []);

  return (
    <View>
      <Text>Cart</Text>
    </View>
  );

  // <ItemList products={products.products} />;
}
