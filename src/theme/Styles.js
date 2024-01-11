import { StyleSheet } from "react-native";
import Colors from "./Colors.js";
import Metrics from "./Metrics.js";

const Style = StyleSheet.create({
  container: {
    // white
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.primaryAccent,
  },
  card: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark,
    height: 150,
    justifyContent: "left",
    alignItems: "center",
  },
  image: {
    width: "40%",
    height: "90%",
    borderWidth: 4,
    borderColor: Colors.primaryAccent,
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: Metrics.FontSize(16),
    fontWeight: "bold",
    padding: 20,
  },
});

export default Style;
