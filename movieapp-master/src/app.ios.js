/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTransparent: true,
	navBarBlur: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	statusBarColor: 'black',
	// toolBarColor: '#3F51B5',
	// navigationBarColor: '#303F9F',
	// tabSelectedTextColor: '#FFA000',
	// tabNormalTextColor: '#FFC107',
	// tabIndicatorColor: '#FFA000',
	// navBarTextSubtitleColor: '#0060A0'
};
class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Movies',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-film-outline'],
					selectedIcon: iconsMap['ios-film'],
					title: 'Movies',
					navigatorStyle
				},
				{
					label: 'TV Shows',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-desktop-outline'],
					selectedIcon: iconsMap['ios-desktop'],
					title: 'TV Shows',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'green'
			}
		});
	}
}

export default App;
