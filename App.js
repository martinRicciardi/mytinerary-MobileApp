import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './navigation/TabNavigation';
import { Provider } from 'react-redux';
import mainReducers from "./redux/reducers/mainReducers"
import { configureStore as createStore } from "@reduxjs/toolkit"

export default function App() {
  const reduxStore = createStore({ reducer: mainReducers })
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

