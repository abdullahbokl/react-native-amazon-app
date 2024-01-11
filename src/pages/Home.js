import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";
import Metrics from "../theme/Metrics.js";
import Colors from "../theme/Colors.js";

import Actions from "../redux/actions/ProductsActions.js";
import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getProducts());
  }, [dispatch]);

  const state = useSelector((state) => state.ProductsReducer);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

        {/* Loading in indicator and items list */}
        {state.isLoading ? (
          <CustomLoadingIndicator />
        ) : (
          <ItemList products={state.products} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
