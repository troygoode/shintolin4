import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundColor: '#f3f2f2',
  padding: '1px 10px',
  margin: '10px 0'
}

export default class extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  render () {
    return (
      <div
        style={style}
      >{this.props.code}</div>
    )
  }
}
