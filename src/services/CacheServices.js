import AsyncStorage from "@react-native-async-storage/async-storage";

const CacheServices = {
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.error("error getting " + key + " from cache " + e);
    }
  },
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("error setting " + key + " in cache " + e);
    }
  },
  addToList: async (key, value) => {
    try {
      // use AsyncStorage to get the list
      const list = (await CacheServices.get(key)) || [];
      const newList = [...list, value];
      await CacheServices.set(key, newList);
    } catch (e) {
      console.error("error adding " + value + " to " + key + " in cache " + e);
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
