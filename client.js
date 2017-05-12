import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import {StyleSheet, css} from 'aphrodite/no-important'
import devices from './utils/devices.js'

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

render(<App devices={devices}/>, document.getElementById('seed'))
