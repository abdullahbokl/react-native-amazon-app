import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, Image } from "react-native";
import Style from "../theme/Styles.js";

import { TouchableOpacity } from "react-native-gesture-handler";

const ItemList = ({ products }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={Style.list}
      data={products}
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
                source={{ uri: item.images[0] }}
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
  );
};

export default ItemList;
