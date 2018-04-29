// @flow

import type { Dispatch } from '../types/dispatch'

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'

export type SubmitFormPayload = {
  email: string,
  password: string
}

export const submitLogin = (dispatch: Dispatch<SubmitFormPayload>) => (form: SubmitFormPayload) => {
  dispatch({ ...form, type: LOGIN_SUBMIT })
}
