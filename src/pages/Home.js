import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, FlatList, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Metrics from "../theme/Metrics.js";
import ProductsActions from "../enums/ProductsActions.js";
import Colors from "../theme/Colors.js";
import { TouchableOpacity } from "react-native-gesture-handler";


const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ProductsActions.GET_PRODUCTS,
          payload: data,
        });
      });
  }, []);

  return (
    <View style={Style.container}>
      <Text
        style={{
          fontSize: Metrics.FontSize(20),
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Results
      </Text>

      {/* Location view */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors.primary,
          padding: 15,
        }}
      >
        <Icon
          name="location-sharp"
          size={Metrics.FontSize(20)}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: Metrics.FontSize(16), marginRight: 10 }}>
          Delivery to Monoufia, Abdullah Khaled
        </Text>
      </View>

      {/* List of products */}
      <FlatList
        style={Style.list}
        data={products.products}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={Style.card}
              onPress={() => {
                navigation.navigate("Item", { item });
              }}
            >
              <View style={Style.image}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <Text style={Style.text} numberOfLines={3} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={Style.text} numberOfLines={2} ellipsizeMode="tail">
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

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
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark,
    height: 150,
    justifyContent: "left",
    alignItems: "center",
  },
  image: {
    width: "40%",
    height: "90%",
    borderWidth: 4,
    borderColor: Colors.primaryAccent,
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: Metrics.FontSize(16),
    fontWeight: "bold",
    padding: 20,
  },
});
