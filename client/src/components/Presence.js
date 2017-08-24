// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Presence.css'

export default class Tile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFriend: PropTypes.bool,
    id: PropTypes.string
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

    return <div className={className} onClick={this.props.onClick}>
      <div className='presence-item-tag'></div>
      <div className='presence-item-text'>{name}</div>
      <CreatureId />
    </div>
  }
}
