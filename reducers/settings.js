import {
  SETTINGS_CHANGE_PAGE,
  SETTINGS_SET_LOADING,
  SETTINGS_CHANGE_SELECTED_DEVICE,
  SETTINGS_UPDATE_CURRENT_DEVICE_MAC_ADDRESS
} from './../utils/actionTypes.js'

export const settingsInit = {
  selectedDevice: 'en0',
  currentDeviceMacAddress: 'Loading Address',
  currentPage: 'Home',
  isLoading: false
}

const settingsReducer = (state = settingsInit, action) => {
  switch (action.type) {
  case SETTINGS_CHANGE_PAGE: {
    state = {...state, currentPage: action.page}
    break
  }
  case SETTINGS_CHANGE_SELECTED_DEVICE: {
    state = {...state, selectedDevice: action.address}
    break
  }
  case SETTINGS_UPDATE_CURRENT_DEVICE_MAC_ADDRESS: {
    state = {...state, currentDeviceMacAddress: action.address}
    break
  }
  case SETTINGS_SET_LOADING: {
    state = {...state, isLoading: action.isLoading}
    break
  }
  }
  return state
}

export default settingsReducer
