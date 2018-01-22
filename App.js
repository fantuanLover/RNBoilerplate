import React, { Component } from 'react'
import { AppRegistry} from 'react-native'
import { Provider } from 'react-redux'

import { Switch, Router, Route } from 'react-router-native'
import createHistory from 'history/createMemoryHistory'

import Routes from './app/routes'
import store from './app/store'


const history = createHistory()

export default class App extends Component {
	render() {
		return (
			<Provider store = {store}>
				<Routes />
			</Provider>
		)
	}
}

AppRegistry.registerComponent('demo', () => App)