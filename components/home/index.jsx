import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import DeviceList from './../deviceList/'

class Home extends Component {
  render () {
    return (
      <div className={css(styles.homeContainer)}>
      <h1 className={css(styles.mainTitle)}>02:0E:22:FF:AF:13</h1>
      <button className={css(styles.mainButton)}>Generate New</button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  seedContainer: {},
  mainTitle: {
    textAlign: 'center',
    margin: '0 0 .5em 0',
    fontSize: '2em',
    lineHeight: '110%'
  },
  mainButton: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    padding: '1em',
    border: '0',
    fontSize: '1.2em',
    textAlign: 'center',
    borderRadius: '.3em',
    cursor: 'pointer',
    backgroundColor: '#ff66d2',
    transition: 'background-color .2s ease-in-out',
    ':focus': {
      outline: '0',
      border: '0',
      backgroundColor: '#8c194f'
    },
    ':hover': {
      backgroundColor: '#8c194f'
    },

  }
})

export default Home
