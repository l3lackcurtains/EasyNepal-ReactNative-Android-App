import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import AppNavigator from './AppNavigator'
import rootReducers from './reducers'
import rootSagas from './sagas'

// Combine all reducers including the routes
const appReducer = combineReducers({
  ...rootReducers,
  nav: (state, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state
  }
})

// Redux Logger Options
const logger = createLogger({
	level: 'info'
})

// Apply saga and logger middlewares
const sagaMiddleware = createSagaMiddleware()
let middleware = applyMiddleware(sagaMiddleware, logger)

// Create Store for redux
const store = createStore(appReducer, middleware)

// Run sagas Middleware
sagaMiddleware.run(rootSagas)

/* eslint-disable */
// Integrating react navigation router with redux
@connect(state => ({
  nav: state.nav
}))
class AppWithNavigationState extends Component{
  // Solves the issue with Android Back button
  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    };

    render (){
      return(
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })} />
      )
    }
  }

export { store, AppWithNavigationState }
