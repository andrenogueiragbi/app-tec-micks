import React from 'react';
import { StatusBar,LogBox } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#0791AB' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}