// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Message.css'

export class MessageSystem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date)
  }

  render () {
    const date = new Date(this.props.timestamp)
    return <div className='message message-system'>
      <span className='message-text'>{this.props.text}</span>
      <span className='message-timestamp'>{date.toString()}</span>
    </div>
  }
}

export class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

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

