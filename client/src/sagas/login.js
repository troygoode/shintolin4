// @flow

import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_SUBMIT, requestLogin, requestLoginSuccess, requestLoginError } from '../actions/login'

export const apiRequest = ({ callFn, requestAction, successAction, errorAction }) => {
  return function * (input) {
    try {
      yield put(requestAction(input))
      const response = yield callFn(input)
      if (response.status >= 200 && response.status <= 299) {
        yield put(successAction(response.data))
      } else {
        yield put(errorAction(response))
      }
    } catch (err) {
      yield put(errorAction(err))
    }
  }
}

// export function * loginSaga (loginForm) {
// try {
// yield put(requestLogin(loginForm))
// const response = yield call(axios.post, '/auth')
// if (response.status >= 200 && response.status <= 299) {
// yield put(requestLoginSuccess(response.data))
// } else {
// yield put(requestLoginError(response))
// }
// } catch (err) {
// yield put(requestLoginError(err))
// }
// }

export function * watchLogin () {
  yield takeEvery(LOGIN_SUBMIT, apiRequest({
    callFn: () => call(axios.post, '/auth'),
    requestAction: requestLogin,
    successAction: requestLoginSuccess,
    errorAction: requestLoginError
  }))
}
