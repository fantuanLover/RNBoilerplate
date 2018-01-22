import React, { Component } from 'react';
import { Route, Router } from 'react-router-native';
import { AppRegistry, View, Text } from 'react-native';
import { Button } from 'antd-mobile'

export default class Detail extends Component {

    render() {
		
        return (
            <View>
                <Text>This is Detail</Text>    
				<Button type="ghost" size="small" onPressIn={() => this.props.history.push('/')}>go</Button>
            </View>
        );
    }
}

AppRegistry.registerComponent('Detail', () => Detail);