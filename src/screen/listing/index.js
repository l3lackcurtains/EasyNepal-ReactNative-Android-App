import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import { fetchSingleListing, clearSingleListing } from '../../redux/actions/listingAc'
import ListingBox from '../../components/listingBox'
import SingleListing from '../../components/singleListing'
import Loading from '../../components/loading'

@connect (state => ({ singleListing: state.singleListing }))
class Listing extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const id = this.props.navigation.state.params.result.id
		console.log(id)
		this.props.dispatch(fetchSingleListing(id))
	}

	// Clear the previous state result
	componentWillUnmount(){
		this.props.dispatch(clearSingleListing())
	}
	render() {
		const { singleListing } = this.props
		return (
		<Container style={{ margin: -2.5, marginTop: -5 }}>
			<Content>
				<ListingBox listing={this.props.navigation.state.params.result} />
				{
					!singleListing.isReceived ?
					<Loading /> :
					singleListing.error ?
					<Text>Error fetching data</Text> :
					<View>
						<SingleListing listing={singleListing.data} />
					</View>
				}
				
			</Content>
		</Container>
		)
	}
}

export default Listing
