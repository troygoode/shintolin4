// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ProgressBar.css'

type ProgressBarColor = 'red' | 'green' | 'yellow' | 'blue'

type Props = {
  min?: number,
  max: number,
  value: number,
  textMapper?: (number) => string,
  color?: ProgressBarColor
}

const clamp = (min: number, max: number, value: number) => {
  return Math.min(Math.max(min, value), max)
}

export default class ProgressBar extends Component<Props> {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    textMapper: PropTypes.func,
    color: PropTypes.string
  }

  render () {
    const { min = 0, max, value, color = 'blue', textMapper } = this.props
    const percentage = clamp(0, 100, Math.floor(((value - min) / (max - min)) * 100))
    const text = textMapper ? textMapper(value) : `${Math.floor(value)}/${Math.floor(max)}`

    return (
      <div className={`progress-bar ${color}`}>
        <div className='progress-bar-progress' style={{width: `${percentage}%`}}></div>
        <div className='progress-bar-content'>{text}</div>
      </div>
    )
  }
}
