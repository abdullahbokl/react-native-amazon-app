import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";

import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";
import CustomErrorComponent from "../components/CustomErrorComponent.js";

const SearchResults = () => {
  const state = useSelector((state) => state.SearchReducer);
  console.log("SearchReducer state: ", state);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.container}>
        {/* Loading, Loaded, Error */}
        {state.isLoading ? (
          <CustomLoadingIndicator />
        ) : state.error ? (
          <CustomErrorComponent error={state.error} />
        ) : (
          <ItemList products={state.products} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchResults;
