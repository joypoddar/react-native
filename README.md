## Initial Setup

Follow instructions from [here](https://reactnative.dev/docs/environment-setup)

yarn global add expo-cli

expo init confusion

select blank

cd confusion

yarn start

Use expo android app for emulating android

## Components Part 1

yarn add react-native-elements@beta

## Navigation Part 1

// yarn add @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/stack
// yarn add react-native-vector-icons

## Navigation Part 2

yarn add @react-navigation/drawer

## W2: Exercise (Video): Using Redux in your React Native App

Follow instruction in baseUrl.js file to load the json-server

## W2: Exercise (Video): Forms

yarn add @react-native-picker/picker
expo install @react-native-community/datetimepicker

## W2: Exercise (Instructions): Modals

yarn add moment

## W3: Exercise (Video): Persist Redux Store

```jsx
yarn add @react-native-community/async-storage

import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  //...
  storage: AsyncStorage,
}
```
