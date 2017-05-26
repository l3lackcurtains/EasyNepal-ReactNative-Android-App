import React from 'react'
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native'
import {
	Card,
	CardItem,
} from 'native-base'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	backgroundImage: {
		resizeMode: 'cover',
		width,
		height: 200,
		backgroundColor: '#727272'
	},
	overlay: {
		flex: 1,
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0.45,
		backgroundColor: 'black',
		width
	},
	meta: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		marginTop: 120,
		marginLeft: 20
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#fff',
		paddingRight: 25
	},
	location: {
		color: '#f1f1f1',
		fontSize: 16
	}
})

const ListingBox = ({ listing }) => {
	const title = listing.title.rendered.replace(/&nbsp;/gi, '').replace(/&amp;/gi, '').replace(/&#8217;/gi, '\'')
	return (
		<Card transparent>
			<CardItem cardBody>
				<Image
					style={styles.backgroundImage}
					defaultSource={{ uri: 'https://wallpaperscraft.com/image/bones_game_newspaper_black_white_7921_2048x1152.jpg' }}
					source={{ uri: listing.image }}
				>
					<View style={[styles.overlay, { height: 360 }]} />
					<View style={styles.meta}>
						<Text style={styles.title} numberOfLines={1} >{title}</Text>
						<Text style={styles.location}>{listing.geolocation_formatted_address[0]}</Text>
						<Text style={styles.location}>{listing.geolocation_state_long[0]}</Text>
					</View>
				</Image>
			</CardItem>
		</Card>
	)
}

export default ListingBox