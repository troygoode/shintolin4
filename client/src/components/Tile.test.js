// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './Test'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const f1 = () => {}
  ReactDOM.render(<UUT onSubmit={f1} />, div)
})
