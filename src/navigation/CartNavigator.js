import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../pages/Cart.js";
const Stack = createStackNavigator();
import Item from "../pages/Item.js";

export default function CartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Item"
        component={Item}
        options={{
          headerTitle: "",
        }}
      /> */}
    </Stack.Navigator>
  );
}
