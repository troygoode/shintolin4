// @flow

export interface DispatchInput {
  type: string
}
export type Dispatch<T> = (input: DispatchInput & T) => void
