import React, { Component } from 'react'
import { Route, Router } from 'react-router-native'
import { AppRegistry, View, Text } from 'react-native'
import { Button } from 'antd-mobile'


export default class Home extends Component {

    render() {
		
        return (
            <View>
                <Text>This is Home</Text>  
				<Button type="ghost" size="small" onPressIn={() => this.props.history.push('/Detail')}>go</Button>
            </View>
        )
    }
}

AppRegistry.registerComponent('Home', () => Home)