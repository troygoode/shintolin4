// @flow

import * as actions from '../actions'
import { combineReducers } from 'redux'

const auth = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case actions.LOGIN_SUBMIT:
      console.log('LOGIN_SUBMIT')
      return state
    default:
      return state
  }
}

export default combineReducers({
  auth
})
