import React, { Component } from 'react'
import { Container, Content, Fab, Icon, Text } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchSearchListing, clearSearchListing } from '../../redux/actions/listingAc'
import ListingBox from '../../components/listingBox'
import Loading from '../../components/loading'

@connect (state => ({ searchListing: state.searchListing }))
class Result extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: true
		}
	}

	componentDidMount() {
		const query = this.props.navigation.state.params.searchText
		this.props.dispatch(fetchSearchListing(1, query))
	}

	// Clear the previous state result
	componentWillUnmount(){
		this.props.dispatch(clearSearchListing())
	}

	render() {
		const { navigation, searchListing } = this.props
		return (
			<Container style={{ margin: -2.5, marginTop: -5 }} >
				<Content>
				{
					!searchListing.isReceived ?
					<Loading /> :
					searchListing.error ?
					<Text>Error loading</Text> :
					searchListing.data.length === 0 ?
					<Text>No Result found</Text> :
					searchListing.data.map((result, index) => {
						return (
							<TouchableOpacity
								onPress={() => { navigation.navigate('Listing', { result }) }}
								activeOpacity={0.8}
								focusedOpacity={0.97}
								key={result.id}
							>
								<ListingBox listing={result} />
							</TouchableOpacity>
						)
					})
				}
					
				</Content>
				<View>
					<Fab
						active={this.state.active}
						direction="up"
						style={{ backgroundColor: '#5067FF' }}
						position="bottomRight"
						onPress={() => navigation.navigate('Maps')}
					>
						<Icon name="md-pin" />
					</Fab>
				</View>
			</Container>
		)
	}
}

export default Result
