//import thu vien
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'
// tao component
const App = () =>
(
		<Header content='Cars' />
);
//render no len device
AppRegistry.registerComponent('Cars', () => App);
