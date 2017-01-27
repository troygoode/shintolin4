import React, {Component} from 'react'
// import { Link, browserHistory } from 'react-router'

export default class extends Component {
  constructor ({ children }) {
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
