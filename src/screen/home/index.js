import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text, Container, Button, Item, Input } from 'native-base'

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
		width: null,
		height: null
	},
	logoWrapper: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		marginBottom: -60
	},
	logo: {
		width: 250,
		height: 80,
		resizeMode: 'contain',
		marginTop: 30,
	},
	searchBox: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: 200,
		width: 400,
	},
	searchFields: {
		paddingVertical: 16
	}
})

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: ''
		}
		this.onSearchChange = this.onSearchChange.bind(this)
	}
	onSearchChange(text) {
		this.setState({
			searchText: text
		})
	}
	render() {
		return (
		<Image
			source={require('../../assets/images/cover.jpg')}
			style={styles.backgroundImage}
		>
			<View style={styles.logoWrapper}>
				<Image
					source={require('../../assets/images/logo.png')}
					style={styles.logo}
				/>
			</View>
			<Container style={{ flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
				<View style={styles.searchBox}>
					<View style={styles.searchFields}>
						<Text
							style={{
								fontSize: 40,
								color: '#fff',
								textShadowColor: '#000',
								textShadowOffset: { height: 0.5, width: 0.6 },
								fontWeight: '800',
								marginBottom: 10
							}}
						>EXPLORE NEPAL</Text>
					</View>
					<View style={styles.searchFields} style={{ width: 250 }}>
						<Item style={{ borderWidth: 0 }}>
							<Input
								placeholder="Treak in Pokhara"
								style={{
									backgroundColor: 'rgba(200,225,225,0.94)',
									borderRadius: 10
								}}
								onChangeText={this.onSearchChange}
							/>
						</Item>
					</View>
					<View style={styles.searchFields}>
						<Button rounded style={{ width: 250 }} onPress={() => this.props.navigation.navigate('Result', { searchText: this.state.searchText })}>
							<Text style={{ paddingHorizontal: 70 }}>Search</Text>
						</Button>
					</View>
				</View>
			</Container>
		</Image>
		)
	}
}

export default Home
