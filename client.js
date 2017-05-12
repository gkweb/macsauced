import React from 'react'
import {render} from 'react-dom'
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import {StyleSheet, css} from 'aphrodite/no-important'

import App from './components/app'
import devicesReducer, {devicesInit} from './reducers/devices.js'
import pagesReducer, {pagesInit} from './reducers/pages.js'
import settingsReducer, {settingsInit} from './reducers/settings.js'
import devices from './utils/devices.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = []

const reduced = combineReducers({
  devices: devicesReducer,
  pages: pagesReducer,
  settings: settingsReducer
})
export const store = createStore(reduced, {
  devices: devicesInit,
  pages: pagesInit,
  settings: settingsInit
},
composeEnhancers(applyMiddleware(...middleware))
)

// Apply body resets etc.. here
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    color: 'white',
    padding: '0 1em 1em 1em',
    margin: '0',
    fontFamily: 'Roboto, Dingbats, serif'
  }
})

document.body.classList.add(css(styles.body))

const r = () => render(<App devices={devices} state={store.getState()}/>, document.getElementById('seed'))

store.subscribe(r)
r()
