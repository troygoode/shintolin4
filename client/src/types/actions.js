// @flow

export type Action<T> = {
  +type: T
}

export type ActionT<T, T2> = Action<T> & T2

export type ApiRequestActions = {
  requestParameters: ((any) => any) | {
    method?: string,
    url: string
  },
  requestSent: string,
  requestSentAction: (any) => any,
  requestSucceeded: string,
  requestSucceededAction: (any) => any,
  requestErrored: string,
  requestErroredAction: (any) => any
}
