import React, {Component} from 'react'
import {
  StyleSheet,
  css
} from 'aphrodite/no-important'
import {
  store
} from './../../client.js'
import {
  SETTINGS_CHANGE_SELECTED_DEVICE
} from './../../utils/actionTypes.js'

const changeSelectedDevice = (device) => ({
  type: SETTINGS_CHANGE_SELECTED_DEVICE,
  device
})

// Network device
const nDevice = (device, index) => (
  <div key={index}>{device}
  <button onClick={() => {store.dispatch(changeSelectedDevice(device))}}>Use</button>
  </div>
)

class DeviceList extends Component {
  getDevices() {
    if (this.props.devices) return Object.keys(this.props.devices).map((device, index) => (nDevice(device, index)))
  }
  render () {
    return (
      <div>
        {this.getDevices()}
      </div>
    )
  }
}

export default DeviceList
