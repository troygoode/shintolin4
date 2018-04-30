// @flow

import { LOGIN_SUBMIT, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR } from '../actions/login'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true
      }
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.userId,
        displayName: action.displayName
      }
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
