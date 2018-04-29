// @flow

import React, { Component } from 'react'
import './Message.css'

type MessageSystemProps = {
  text: string,
  timestamp: Date
}

export class MessageSystem extends Component<MessageSystemProps> {
  render () {
    const date = new Date(this.props.timestamp)
    return <div className='message message-system'>
      <span className='message-text'>{this.props.text}</span>
      <span className='message-timestamp'>{date.toString()}</span>
    </div>
  }
}

type MessageListProps = {
  messages: Array<Object>
}

export class MessageList extends Component<MessageListProps> {
  render () {
    const Message = ({message}) => {
      switch (message.type) {
        case 'system': return <MessageSystem {...message} />
        default: return null
      }
    }

    return <div className='message-list'>
      {this.props.messages.map((m) => <Message message={m} key={m.id} />)}
    </div>
  }
}
