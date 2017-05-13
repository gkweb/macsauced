import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import DeviceList from './../deviceList/'
import {store} from './../../client.js'
import {
  DEVICES_ADD
} from './../../utils/actionTypes.js'

const devicesAdd = (devices) => ({
  type: DEVICES_ADD,
  devices
})

class Settings extends Component {
  componentWillMount() {
    let rawDevices = null
    if (si) rawDevices = si.networkInterfaces().then(devices => {

      console.log(devices)
      // console.debug(devices)
      let newDevices = {}
      let existingDevices = Object.assign({}, this.props.state.devices)
      let unUsedDevices = {}

      for (let i=0;i < devices.length; i++) {
        if (!devices[i].internal && !existingDevices[devices[i].iface]) {
          newDevices[devices[i].iface] = {
            name: devices[i].iface,
            enabled: true,
            mac: {
              previous: null
            }
          }
        } else if(existingDevices[devices[i].iface]) {
          // device exists in state already so do not overwrite
          newDevices[devices[i].iface] = {
            name: devices[i].iface,
            enabled: true,
            mac: {
              previous: existingDevices[devices[i].iface].mac.previous
            }
          }
        }
      }

      unUsedDevices = {}
      unUsedDevices = Object.keys(existingDevices).reduce((accumulated, currentKey, index) => {
        if (!newDevices[currentKey]) {
          accumulated[currentKey] = {
            ...existingDevices[currentKey],
            enabled: false
          }
          return accumulated
        }
      }, {})
      store.dispatch(devicesAdd({...newDevices, ...unUsedDevices}))
    })

  }
  render () {
    return (
      <div className={css(styles.seedContainer)}>
        <DeviceList devices={this.props.state.devices}/>
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
    padding: '.5em 1em',
    border: '0',
    textAlign: 'center',
    borderRadius: '.1em',
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

export default Settings
