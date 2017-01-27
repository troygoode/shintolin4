// @flow

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'

export type SubmitFormPayload = {
  email: string,
  password: string
}

export const submitLogin = (form: SubmitFormPayload) => (dispatch) => {
  dispatch({
    type: LOGIN_SUBMIT,
    payload: form
  })
}
