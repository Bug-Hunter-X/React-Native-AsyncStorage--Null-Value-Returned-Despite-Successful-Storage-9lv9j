# React Native AsyncStorage Null Value Bug

This repository demonstrates a common bug in React Native's AsyncStorage: retrieving a null value even after successfully storing data. The issue stems from attempting to retrieve the data before the storage operation completes.

## Bug Description
When using AsyncStorage to store and immediately retrieve data, there's a race condition. The retrieval operation might execute before the storage operation finishes, leading to a null value being returned. This problem is more likely when dealing with asynchronous functions and complex application logic.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run the app on an emulator or physical device.
4. Observe the console output, which will initially display 'null' before showing the correctly stored data.

## Solution
The solution involves using the `await` keyword and a `Promise` to properly handle the asynchronous nature of AsyncStorage. The `await` keyword ensures that the retrieval is performed only after the storage is complete.