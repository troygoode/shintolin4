// @flow

// declare function it (name: string, callback: Function): void
type ItFunction = (name: string, callback: Function) => void

export const it: ItFunction = global.it
