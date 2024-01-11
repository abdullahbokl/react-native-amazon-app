import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartActions from "../redux/actions/CartActions";
import ItemList from "../components/ItemsList.js";
import Style from "../theme/Styles.js";
import Metrics from "../theme/Metrics.js";
import Colors from "../theme/Colors.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import CustomLoadingIndicator from "../components/CustomLoadingIndicator.js";
import CustomErrorComponent from "../components/CustomErrorComponent.js";


export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CartActions.loadCart());
  }, []);

  const state = useSelector((state) => state.CartReducer);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.container}>
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
