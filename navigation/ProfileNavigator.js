import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/Profile.js";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
