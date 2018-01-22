import React, { Component } from 'react'
import { AppRegistry, View, Text, Button } from 'react-native'


export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedTab: 'redTab',
		}
	}
    render() {
        return (
            <View>
				<Text>This is Home</Text>  
				<Button onPress={() => this.props.history.push('/Detail')} title="go" />
				
            </View>
        )
    }
}

AppRegistry.registerComponent('Home', () => Home)