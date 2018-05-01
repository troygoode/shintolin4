// @flow

type Return_<R, F: (...args: Array<any>) => R> = R // eslint-disable-line no-unused-vars

export type Return<T> = Return_<*, T>
