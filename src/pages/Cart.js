import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";
import CustomErrorComponent from "../components/CustomErrorComponent.js";
import LocationView from "../components/LocationView.js";
import SearchField from "../components/SearchField.js";

export default function Cart() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(CartActions.loadCart());
  // }, []);

  const state = useSelector((state) => state.CartReducer);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.container}>
        {/* space from top */}
        <View style={{ height: 15 }} />

        {/* location view */}
        {/* Search filed */}
        <SearchField />

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
}
