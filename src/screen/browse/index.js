import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import { View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'

import { fetchListing } from '../../redux/actions/listingAc'

@connect (state => ({ listing: state.listing }))
class Result extends Component {
	constructor(props) {
		super(props)
	}

	// Initial dispatch ( Listing )
	componentDidMount() {
		this.props.dispatch(fetchListing(1))
	}

	render() {
		const { width, height } = Dimensions.get('window')
		const { listing, navigation } = this.props
		return (
			<Container>
				<Content>
				{
					listing.error ? <Text>Error Loading Map</Text>
					:
					!listing.isReceived ?
					<Text>Loading...</Text>
					:
					<MapView
						initialRegion={{
							latitude: 28.2380,
							longitude: 83.9956,
							latitudeDelta: 1.0922,
							longitudeDelta: 1.0421,
						}}
						style={{
							width,
							height
						}}
					>
						{
							listing.data.map(marker => (
								<MapView.Marker.Animated
									key={marker.id}
									coordinate={{
										latitude: parseFloat(marker.rest_api_enabler.geolocation_lat),
										longitude: parseFloat(marker.rest_api_enabler.geolocation_long)
									}}
									title={marker.title.rendered}
									description={marker.geolocation_formatted_address[0]}
									onPress={() => { navigation.navigate('Listing', { result : marker }) }}
								/>
							))
						}
					</MapView>
				}
				</Content>
			</Container>
		)
	}
}

export default Result
