// @flow

import React, {Component} from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: *
}

export default class extends Component<Props, *> {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/foo'>Foo</Link></li>
        </ul>

        <hr />

        <div>{this.props.children}</div>
      </div>
    )
  }
}
