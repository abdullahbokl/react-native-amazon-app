import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";

import ProductsActions from "../redux/actions/ProductsActions.js";
import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";
import CustomErrorComponent from "../components/CustomErrorComponent.js";
import CartActions from "../redux/actions/CartActions.js";
import LocationView from "../components/LocationView.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsActions.getProducts());
    dispatch(CartActions.loadCart());
  }, [dispatch]);

  const state = useSelector((state) => state.ProductsReducer);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.container}>
        {/* location view */}
        <LocationView />

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

export default Home;
