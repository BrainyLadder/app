/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/Redux/Store/store';

const store = configureStore()

const reduxStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => reduxStore);
