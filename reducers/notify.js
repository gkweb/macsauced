import {
  UPDATE_NOTIFCATION,
  CLEAR_ALL_NOTIFCATION
} from './../utils/actionTypes.js'

// TYPES - SUCCESS, ERROR
export const notifyInit = {
  // text: 'Some error',
  // type: 'error'
}

// NOTIFY structure

const notifyReducer = (state = notifyInit, action) => {
  switch(action.type) {
  case UPDATE_NOTIFCATION: {
    state = {...state, ...action.notification}
    break
  }
  case CLEAR_ALL_NOTIFCATION: {
    state = {}
    break
  }
  }
  return state
}

export default notifyReducer
