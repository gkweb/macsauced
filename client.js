import React from 'react'
import {render} from 'react-dom'
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {StyleSheet, css} from 'aphrodite/no-important'

import App from './components/app'
import devicesReducer, {devicesInit} from './reducers/devices.js'
import pagesReducer, {pagesInit} from './reducers/pages.js'
import settingsReducer, {settingsInit} from './reducers/settings.js'
import notifyReducer, {notifyInit} from './reducers/notify.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

const reduced = combineReducers({
  devices: devicesReducer,
  pages: pagesReducer,
  settings: settingsReducer,
  notify: notifyReducer
})
export const store = createStore(reduced, {
  devices: devicesInit,
  pages: pagesInit,
  settings: settingsInit,
  notify: notifyInit
},
composeEnhancers(applyMiddleware(...middleware))
)

// Apply body resets etc.. here
const styles = StyleSheet.create({
  body: {
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    padding: '0 1em 1em 1em',
    margin: '0',
    fontFamily: 'Roboto, Dingbats, serif'
  },
  html: {
    overflow: 'visible'
  }
})

document.body.classList.add(css(styles.body))
document.getElementsByTagName('html')[0].classList.add(css(styles.html))

const r = () => render(<App state={store.getState()}/>, document.getElementById('seed'))

store.subscribe(r)
r()
