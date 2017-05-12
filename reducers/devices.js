import {
  DEVICES_ADD,
  DEVICES_SET_PREVIOUS_MAC
} from './../utils/actionTypes.js'

export const devicesInit = {}

// Device structure


const devicesReducer = (state = {}, action) => {
  switch(action.type) {
  case DEVICES_ADD: {
    state = {...state, ...action.devices}
    break
  }
  case DEVICES_SET_PREVIOUS_MAC: {
    const device = Object.assign({}, state[action.device])
    device.mac.previous = action.address
    state = {...state, device}
    break
  }
  }
  return state
}

export default devicesReducer
