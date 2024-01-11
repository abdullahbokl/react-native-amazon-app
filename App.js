import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

import Tabs from "./src/navigation/Tabs.js";
import Store from "./src/redux/Stores/Store.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
      </NavigationContainer>
    </Provider>
  );
}
