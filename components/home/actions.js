import {
  UPDATE_NOTIFCATION,
  SETTINGS_UPDATE_CURRENT_DEVICE_MAC_ADDRESS
} from './../../utils/actionTypes.js'

export const updateNotification = (notification) => ({
  type: UPDATE_NOTIFCATION,
  notification
})

export const updateCurrentDeviceMacAddress = (address) => ({
  type: SETTINGS_UPDATE_CURRENT_DEVICE_MAC_ADDRESS,
  address
})

export const getDeviceMacAddress = (device) => {
  return ((dispatch) => {

    si.networkInterfaces().then(devices => {
      const foundDevice = devices.filter((cDevice) => (cDevice.iface === device))
      if (foundDevice) dispatch(updateCurrentDeviceMacAddress(foundDevice[0].mac))
    })

  })
}
