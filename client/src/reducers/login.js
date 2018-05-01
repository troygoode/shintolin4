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

type Actions =
  | Return<typeof submitLogin>
  | Return<typeof requestLoginSuccess>
  | Return<typeof requestLoginError>

type AuthState = {
  isLoading: boolean,
  accessToken?: string,
  userId?: number,
  displayName?: string,
  iat?: number
}

const initialState: AuthState = {
  isLoading: false
}

export default (state: AuthState = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accessToken: action.accessToken,
        userId: action.userId,
        displayName: action.displayName,
        iat: action.iat
      }
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
