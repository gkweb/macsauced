import {
  SETTINGS_CHANGE_PAGE
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
    }
  }
  return state
}

export default settingsReducer
