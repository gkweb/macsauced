import {
  UPDATE_NOTIFCATION
} from './../utils/actionTypes.js'

// TYPES - SUCCESS, ERROR
export const notifyInit = {
  // text: 'Some error blah',
  // type: 'error'
}

// NOTIFY structure

const notifyReducer = (state = notifyInit, action) => {
  switch(action.type) {
  case UPDATE_NOTIFCATION: {
    state = {...state, ...action.notification}
    break
  }
  }
  return state
}

export default notifyReducer
