// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import UUT from './Presence'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UUT
    id={'id'}
    isFriend={true}
    onClick={() => ({})}
    name='name'
    />, div)
})
