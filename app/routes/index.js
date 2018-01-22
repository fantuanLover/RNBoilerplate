import React, { Component } from 'react'
import { Switch, Router, Route } from 'react-router-native'
import createHistory from 'history/createMemoryHistory'

import Home from './Home'
import Detail from './Detail'

const history = createHistory()

export default () => (
	<Router history = { history }>
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route exact path="/Detail" component={ Detail } />
		</Switch>
	</Router>
)