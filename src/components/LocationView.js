import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../theme/Colors.js";
import Metrics from "../theme/Metrics.js";

const LocationView = () => {
  return (
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
  );
};

export default LocationView;
