import {
  SETTINGS_CHANGE_PAGE,
  SETTINGS_SET_LOADING,
  SETTINGS_CHANGE_SELECTED_DEVICE
} from './../utils/actionTypes.js'

export const settingsInit = {
  selectedDevice: 'en0',
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
    state = {...state, selectedDevice: action.device}
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
