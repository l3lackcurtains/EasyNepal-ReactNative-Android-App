import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StyleProvider } from 'native-base'
import { store, AppWithNavigationState } from './redux'
import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'

class EasyNepal extends Component {
	render() {
		return (
			<Provider store={store}>
				<StyleProvider style={getTheme(material)}>
					<AppWithNavigationState />
				</StyleProvider>
			</Provider>
		)
	}
}

export default EasyNepal
