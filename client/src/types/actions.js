// @flow

export type Action<T> = {
  +type: T
}

export type ActionT<T, T2> = Action<T> & T2
