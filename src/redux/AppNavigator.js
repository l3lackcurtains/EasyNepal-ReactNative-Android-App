import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'native-base'

import Home from '../screen/home'
import Browse from '../screen/browse'
import Result from '../screen/result'
import Listing from '../screen/listing'
import Map from '../screen/maps'

// Home Stack Navigator
const HomeNavigator = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Easy Nepal',
			header: null
		}
	}
})

// Browse Stack Navigator
const BrowseNavigator = StackNavigator({
	Browse: {
		screen: Browse,
		navigationOptions: {
			title: 'Browse',
		}
	}
})

// Tab Navigation in the first screen
const Tabs = TabNavigator({
	HomeNavigator: {
		screen: HomeNavigator,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="home" style={{ color: tintColor }} />)
		}
	},
	BrowseNavigator: {
		screen: BrowseNavigator,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="map" style={{ color: tintColor }} />),
			header: null
		}
	},
}, {
	tabBarOptions: {
		activeTintColor: '#191919',
		inactiveTintColor: '#727272',
		showLabel: false,
		style: {
			backgroundColor: '#fff',
			height: 60
		},
	},
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	backBehavior: 'none'
})

// Home Stack Navigator
const AppNavigator = StackNavigator({
	Tab: {
		screen: Tabs,
	},
	Result: {
		screen: Result,
		navigationOptions: {
			title: 'Result'
		}
	},
	Listing: {
		screen: Listing,
		navigationOptions: {
			title: 'Single Listing'
		}
	},
	Maps: {
		screen: Map,
		navigationOptions: {
			title: 'Maps'
		}
	}
}, {
	mode: 'modal',
	headerMode: 'float'
})

export default AppNavigator
