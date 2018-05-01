// @flow

import type { Action, ActionT, ApiRequestActions } from '../types/actions'

// ---

export const LOGIN_SUBMIT = 'LOGIN/SUBMIT'

export type SubmitFormPayload = {
  email: string,
  password: string
}

export const submitLogin = (form: SubmitFormPayload): ActionT<typeof LOGIN_SUBMIT, SubmitFormPayload> => {
  const retval = { ...form, type: LOGIN_SUBMIT }
  return retval
}

// ---

export const LOGIN_REQUEST_SENT = 'LOGIN/REQUEST/SENT'

export const requestLoginSent = (input: any): Action<typeof LOGIN_REQUEST_SENT> => {
  return { type: LOGIN_REQUEST_SENT }
}

// ---

export const LOGIN_REQUEST_SUCCESS = 'LOGIN/REQUEST/SUCCESS'

export type RequestLoginSuccessPayload = {
  userId: number,
  displayName: string
}

export const requestLoginSuccess = (data: RequestLoginSuccessPayload): ActionT<typeof LOGIN_REQUEST_SUCCESS, RequestLoginSuccessPayload> => {
  return { ...data, type: LOGIN_REQUEST_SUCCESS }
}

// ---

export const LOGIN_REQUEST_ERROR = 'LOGIN/REQUEST/ERROR'

export const requestLoginError = (loginError: any): Action<typeof LOGIN_REQUEST_ERROR> => {
  return { type: LOGIN_REQUEST_ERROR }
}

// ---

export const loginApiRequest: ApiRequestActions = {
  requestParameters: {
    method: 'POST',
    url: '/auth'
  },
  requestSent: LOGIN_REQUEST_SENT,
  requestSentAction: requestLoginSent,
  requestSucceeded: LOGIN_REQUEST_SUCCESS,
  requestSucceededAction: requestLoginSuccess,
  requestErrored: LOGIN_REQUEST_ERROR,
  requestErroredAction: requestLoginError
}
