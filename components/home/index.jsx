import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import DeviceList from './../deviceList/'
import {store} from './../../client.js'
import {
  updateNotification,
  getDeviceMacAddress
} from './actions.js'

class Home extends Component {
  componentWillMount() {
    store.dispatch(getDeviceMacAddress(this.props.state.settings.selectedDevice))
  }
  generate() {
    const options = {
      name: 'MacSauced',
      // icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
    }
    sudo.exec(`openssl rand -hex 6 | sed 's/\\(..\\)/\\1:/g;s/.$//' | xargs sudo ifconfig ${this.props.state.settings.selectedDevice} ether`, options, function(error, stdout, stderr) {
      const message = {
        type: 'success',
        text: 'Succesfully Changed, Please restart your network device if any issues.'
      }
      if(error) {
        message.text = 'Error attempting to change MAC'
        message.type = 'error'
      } else if (stderr) {
        message.text = stderr
        message.type = 'error'
      } else if (stdout) {
        message.text = stdout
        message.type = 'error'
      }
      store.dispatch(updateNotification(message))
    })
  }
  render () {
    return (
      <div className={css(styles.homeContainer)}>
      <p className={css(styles.mainTitleDesc)}>MAC Address:</p>
      <h1 className={css(styles.mainTitle)}>{this.props.state.settings.currentDeviceMacAddress}</h1>
      <button className={css(styles.mainButton)} onClick={() => this.generate() }>Generate New</button>
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
  mainTitleDesc: {
    color: '#999'
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
