// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Presence.css'

type OnClickParams = {
  name: string,
  id: string
}

type Props = {
  id: string,
  name: string,
  onClick: (OnClickParams) => void,
  isFriend?: boolean
}

export default class Presence extends Component<Props> {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFriend: PropTypes.bool
  }

  render () {
    const className = [
      'presence-item',
      this.props.isFriend ? 'presence-item-friend' : null,
      this.props.id ? 'presence-item-creature' : null
    ].filter((c) => !!c).join(' ')

    const CreatureId = () => {
      if (!this.props.id) {
        return null
      }
      return <div className='presence-item-id'>{this.props.id}</div>
    }

    const name = this.props.id ? this.props.name : `@${this.props.name}`

    const onClick = (e) => {
      e.preventDefault()
      if (this.props.onClick) {
        this.props.onClick({ name: this.props.name, id: this.props.id })
      }
    }

    return <div className={className} onClick={onClick}>
      <div className='presence-item-tag'></div>
      <div className='presence-item-text'>{name}</div>
      <CreatureId />
    </div>
  }
}
