// @flow

type Dispatcher = (obj: Object) => void

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'

export type SubmitFormPayload = {
  email: string,
  password: string
}

export const submitLogin = (form: SubmitFormPayload) => (dispatch: Dispatcher) => {
  dispatch({
    type: LOGIN_SUBMIT,
    payload: form
  })
}
