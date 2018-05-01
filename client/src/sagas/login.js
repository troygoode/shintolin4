// @flow

import type { Saga } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

import { apiRequest } from './api'
import { LOGIN_SUBMIT, loginApiRequest } from '../actions/login'

export function * watchLogin (): Saga<void> {
  yield takeEvery(LOGIN_SUBMIT, apiRequest(loginApiRequest))
}
