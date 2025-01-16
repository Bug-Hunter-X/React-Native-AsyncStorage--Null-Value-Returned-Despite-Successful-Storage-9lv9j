The solution involves using promises and the `await` keyword to ensure that the data is fully stored before attempting to retrieve it.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

// Usage example
const saveAndRetrieve = async () => {
  await storeData('@my_key', { name: 'John Doe', age: 30 });
  const retrievedData = await getData('@my_key');
  console.log('Retrieved data:', retrievedData); 
};

saveAndRetrieve();
```
This revised code uses `await` to ensure the storage operation completes before retrieval, resolving the null value issue.