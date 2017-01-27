// @flow

declare function it (name: string, callback: Function): void

import React from 'react'
import ReactDOM from 'react-dom'
import UUT from './LoginForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const f1 = () => {}
  ReactDOM.render(<UUT onSubmit={f1} />, div)
})
