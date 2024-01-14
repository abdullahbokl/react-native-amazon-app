import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";
import CustomErrorComponent from "../components/CustomErrorComponent.js";
import SearchField from "../components/SearchField.js";

export default function Cart() {
  const state = useSelector((state) => state.CartReducer);

  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.container}>
        {/* space from top */}
        <View style={{ height: 15 }} />

        {/* Search filed */}
        <SearchField onChangeText={(text) => setSearch(text)} />

        {/* Loading, Loaded, Error */}
        {search != "" ? (
          <ItemList products={filterData(state.products, search)} />
        ) : state.isLoading ? (
          <CustomLoadingIndicator />
        ) : state.error ? (
          <CustomErrorComponent error={state.error} />
        ) : (
          <ItemList products={state.products} />
        )}
      </View>
    </SafeAreaView>
  );
}

filterData = (data, search) => {
  return data.filter((item) => {
    const itemData = item.title.toUpperCase();
    const textData = search.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
};
