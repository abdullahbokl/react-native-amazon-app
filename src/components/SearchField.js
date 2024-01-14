import { View, TextInput } from "react-native";
import Style from "../theme/Styles.js";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchField = ({ onChangeText }) => {
  return (
    <View style={Style.searchFieldContainer}>
      <Icon name="search" size={20} color="#000" />
      <View style={{ width: 10 }} />
      <TextInput
        style={Style.searchField}
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchField;
