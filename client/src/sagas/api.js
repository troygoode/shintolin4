// @flow

import type { Saga } from 'redux-saga'
import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import type { ApiRequestActions } from '../types/actions'

export const apiRequest = ({ requestParameters, requestSentAction, requestSucceededAction, requestErroredAction }: ApiRequestActions) => {
  return function * (input: any): Saga<void> {
    try {
      let callFn
      if (typeof requestParameters === 'function') {
        callFn = requestParameters
      } else {
        if (requestParameters.method && requestParameters.method === 'POST') {
          callFn = (input) => call(axios.post, requestParameters.url)
        } else {
          callFn = (input) => call(axios.get, requestParameters.url)
        }
      }

      yield put(requestSentAction(input))
      const response = yield callFn(input)
      if (response.status >= 200 && response.status <= 299) {
        yield put(requestSucceededAction(response.data))
      } else {
        yield put(requestErroredAction(response))
      }
    } catch (err) {
      yield put(requestErroredAction(err))
    }
  }
}
