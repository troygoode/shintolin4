// @flow

import React, {Component} from 'react'
// import { Link, browserHistory } from 'react-router'

type Props = {
  children: any
}

export default class extends Component {
  children: null

  constructor ({ children }: Props) {
    super()
    this.children = children
  }

  render () {
    return (
      <div>
        <div>{this.children}</div>
      </div>
    )
  }
}
