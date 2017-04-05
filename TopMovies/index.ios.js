//import thu vien
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header'
import Movies from './src/components/Movies'
// tao component
const App = () =>
(
  <View style={{ flex:1 }}>
    <Header content='Movies' />
    <Movies />
  </View>

);
//render no len device
AppRegistry.registerComponent('TopMovies', () => App);
