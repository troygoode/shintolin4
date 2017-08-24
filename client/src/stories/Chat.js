import React from 'react'

import { MessageSystem, MessageList } from '../components/Message'

export const MessagesStory = () => {
  return <div>
    <h2>System Message</h2>
    <MessageSystem text='example text' timestamp={new Date()} />
  </div>
}

export const InputStory = () => {
  return <div>Input</div>
}

export const MessageListStory = () => {
  const ts = new Date()
  const ticks = ts.getTime()
  const messages = [
    { type: 'system', text: 'example 1', timestamp: ts, id: `${ticks}1` },
    { type: 'system', text: 'example 2', timestamp: ts, id: `${ticks}2` },
    { type: 'system', text: 'example 3', timestamp: ts, id: `${ticks}3` }
  ]

  return <div><MessageList messages={messages} /></div>
}
