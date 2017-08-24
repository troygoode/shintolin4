// @flow

import React, {Component} from 'react'

type Props = {
  children: *
}

export default class extends Component<Props,> {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}
