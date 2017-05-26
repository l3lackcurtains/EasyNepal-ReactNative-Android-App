import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import MapView from 'react-native-maps'
import HTMLView from 'react-native-htmlview'

const styles = StyleSheet.create({
	listingMeta: {
		backgroundColor: '#fff',
		paddingHorizontal: 24,
		paddingVertical: 16,
		marginTop: -5,
		borderBottomWidth: 1,
		borderColor: '#e3e3e3'
	},
	listingDesc: {
		paddingHorizontal: 24,
		backgroundColor: '#fff'
	},
	titleWrap: {
		borderBottomWidth: 1,
		borderColor: '#e3e3e3',
		paddingVertical: 8
	}
})

// Html styles
const HTMLStyles = StyleSheet.create({
	p: {
		fontSize: 18,
		lineHeight: 28
	},
	span: {
		fontSize: 18,
		lineHeight: 28
	},
	div: {
		fontSize: 18,
		lineHeight: 28
	}
})

const SingleListing = ({ listing }) => {
	const lat = parseFloat(listing.rest_api_enabler.geolocation_lat)
	const long = parseFloat(listing.rest_api_enabler.geolocation_long)
	let content = listing.content.rendered.split('Share this:')
	content = `<p>${content[0]}</p>`
	return (
		<View>
			<View style={styles.listingMeta}>
				<Grid>
					<Row style={{ marginVertical: 4 }}>
						<Col size={2}>
							<Icon name="call" style={{ fontSize: 20, color: 'green' }} />
						</Col>
						<Col size={10}>
							<Text>{listing.phone || 'N/A'}</Text>
						</Col>
					</Row>
					<Row style={{ marginVertical: 4 }}>
						<Col size={2}>
							<Icon name="mail" style={{ fontSize: 20, color: 'blue' }} />
						</Col>
						<Col size={10}>
							<Text>{listing.email || 'N/A'}</Text>
						</Col>
					</Row>
					<Row style={{ marginVertical: 4 }}>
						<Col size={2}>
							<Icon name="link" style={{ fontSize: 20, color: 'red' }} />
						</Col>
						<Col size={10}>
							<Text>{listing.website || 'N/A'}</Text>
						</Col>
					</Row>
				</Grid>
			</View>
			<MapView
				liteMode
				initialRegion={{
					latitude: lat,
					longitude: long,
					latitudeDelta: 0.0179,
					longitudeDelta: 0.00421,
				}}
				style={{ height: 180, borderBottomWidth: 1, borderColor: '#e3e3e3' }}
			>
				<MapView.Marker
					coordinate={{
						latitude: lat,
						longitude: long
					}}
				/>
			</MapView>
			<View style={styles.listingDesc}>
				<View style={styles.titleWrap}>
					<Text style={{ fontSize: 20 }}>{listing.title.rendered}</Text>
				</View>
				<HTMLView
					value={content}
					stylesheet={HTMLStyles}
				/>
			</View>
		</View>
	)
}

export default SingleListing
