import AsyncStorage from '@react-native-async-storage/async-storage';
// store item
export const storeData = async (key, value) => {		
  try {
    await AsyncStorage.setItem(key, value);
    return {
        success: true
    }
  } catch (error) {
    return {
        success: false,
        error
    }
  }
}
// get item
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
    
  } catch(error) {
    return {
        success: false,
        error
    }
  }
}

// get item
export const removeData = async (key) => {
    try {
      const value = await AsyncStorage.removeItem(key)
      return {
          success: true,
      }
    } catch(error) {
      return {
          success: false,
          error
      }
    }
  }
  


export default {
    getData,
    storeData,
    removeData
    

}