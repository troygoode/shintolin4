// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

type FormSubmitEvent = {
  preventDefault: Function
}

type Props = {
  onSubmit: Function
}

export default class LoginForm extends Component<Props,> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault()

    const form: any = {}
    for (const key of Object.keys(this.refs)) {
      form[key] = this.refs[key].value
    }
    this.props.onSubmit(form)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" ref="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" ref="password" />
            </div>
            <div>
              <button>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
