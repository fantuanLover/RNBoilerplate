import React, { Component } from 'react'
import { AppRegistry, View, Text, Button } from 'react-native'

export default class Detail extends Component {

    render() {
        return (
            <View>
                <Text>This is Detail</Text>    
				<Button onPress={() => this.props.history.push('/')} title="go" />
            </View>
        );
    }
}

AppRegistry.registerComponent('Detail', () => Detail);