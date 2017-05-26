import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Spinner } from 'native-base'

const styles = StyleSheet.create({
	loader: {
		marginVertical: 16
	}
})
const Loading = () => {
	return(
		<View>
			<Spinner />
		</View>
	)
}

export default Loading
