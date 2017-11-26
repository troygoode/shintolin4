// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { it } from '../jest'
import { MessageSystem, MessageList } from './Message'

it('MessageList: renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MessageList messages={[]} />, div)
})

it('MessageSystem: renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MessageSystem text={'Hello World'} timestamp={new Date()} />, div)
})
