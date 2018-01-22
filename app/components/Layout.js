import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppRegistry, Text, View } from 'react-native'


@connect((store) => {
	return {
		user: store.user.user
	}
})
export default class Layout extends Component {

    render() {
		console.log(this.props)
        return (
            <View>
                <Text>This is Layout</Text>    
            </View>
        );
    }
}

AppRegistry.registerComponent('Layout', () => Layout);