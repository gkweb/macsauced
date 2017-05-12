import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  seedContainer: {
    backgroundColor: 'black',
    color: 'white',
    height: '100%',
    width: '100%'
  }
})

// Network device
const nDevice = (device, index) => (
  <div key={index}>{device.name}<button>Use</button></div>
)

class DeviceList extends Component {
  getDevices() {
    if (this.props.devices) return this.props.devices.map((device, index) => (nDevice(device, index)))
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
