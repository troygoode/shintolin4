// @flow

export const LOGIN_SUBMIT = 'LOGIN/SUBMIT'
export const LOGIN_REQUEST = 'LOGIN/REQUEST'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN/REQUEST/SUCCESS'
export const LOGIN_REQUEST_ERROR = 'LOGIN/REQUEST/ERROR'

export type SubmitFormPayload = {
  email: string,
  password: string
}

export const requestLogin = () => {
  return { type: LOGIN_REQUEST }
}

export const requestLoginSuccess = (data) => {
  return { ...data, type: LOGIN_REQUEST_SUCCESS }
}

export const requestLoginError = () => {
  return { type: LOGIN_REQUEST_ERROR }
}

export const submitLogin = (form: SubmitFormPayload) => {
  return { ...form, type: LOGIN_SUBMIT }
}
