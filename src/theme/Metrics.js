import { Dimensions } from "react-native";

const ScreenSize = {
  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
};

// font sizes according to the screen size

function FontSize(value) {
  return (value * ScreenSize.screenWidth) / 375;
}

const Metrics = {
  ScreenSize,
  FontSize,
};

export default Metrics;
