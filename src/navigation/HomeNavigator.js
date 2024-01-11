import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home.js";
import Item from "../pages/Item.js";

const Stack = createStackNavigator();
export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
