import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsActions from "../enums/ProductsActions.js";

const API_URL = "https://fakestoreapi.com";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer);

  useEffect(() => {
    fetch(`${API_URL}/products?limit=5`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ProductsActions.GET_PRODUCTS,
          payload: data,
        });
      });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={products.products}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
