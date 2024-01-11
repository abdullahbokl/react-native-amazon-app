import AsyncStorage from "@react-native-async-storage/async-storage";

const CacheServices = {
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.error("error getting " + key + " from cache");
    }
  },
  set: async (key, value) => {
    try {
      await AsyncStorage.getItem(key).then((data) => {
        let cart = JSON.parse(data);
        if (cart == null) {
          cart = [];
        }
        cart.push(value);
        AsyncStorage.setItem(key, JSON.stringify(cart));
      });
    } catch (e) {
      console.error("error setting " + key + " from cache");
    }
  },
  remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("error removing " + key + " from cache");
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error("error clearing cache");
    }
  },
};

export default CacheServices;
