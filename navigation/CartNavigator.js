import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../pages/Cart.js";
const Stack = createStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
