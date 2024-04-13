import { Alert } from 'react-native';
export const getStockInfo = async (stockCode) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode}&apikey=ZJTQLNCHLUKP8SMW`,
      );
      const json = await response.json();
      console.log(json);
      return json['Global Quote']['10. change percent'];
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
      return null;
    }
  };
