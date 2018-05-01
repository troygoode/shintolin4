// @flow

import type { Return } from '../types/return'
import {
  LOGIN_SUBMIT,
  submitLogin,
  LOGIN_REQUEST_SUCCESS,
  requestLoginSuccess,
  LOGIN_REQUEST_ERROR,
  requestLoginError
} from '../actions/login'

type Actions = Return<typeof submitLogin> | Return<typeof requestLoginSuccess> | Return<typeof requestLoginError>
type AuthState = {}

export default (state: AuthState = {}, action: Actions) => {
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
