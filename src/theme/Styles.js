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
    borderRadius: 20,
  },
  image: {
    width: "40%",
    height: "90%",
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: Metrics.FontSize(16),
    fontWeight: "bold",
    padding: 20,
  },
  searchFieldContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    // border
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    // shadow
    shadowColor: Colors.danger,
    elevation: 10,
    // padding
    paddingHorizontal: 15,
    // margin
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Style;
