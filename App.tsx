import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import BottomTabNavigator from './src/navigatiors/bottom-tab-navigator/bottom-tab-navigator';
import { store } from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} backgroundColor={`#0C365A`} />
        <BottomTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
    </Provider> 
  );
};
export default App;
