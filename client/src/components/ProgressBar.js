// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

type Props = {
  min?: number,
  max: number,
  value: number,
  textMapper?: (number) => string
}

export default class ProgressBar extends Component<Props, *> {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    textMapper: PropTypes.func
  }

  render () {
    const { min = 0, max, value } = this.props

    return <div>{min}/{value}/{max}</div>
  }
}
