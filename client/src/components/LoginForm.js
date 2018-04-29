// @flow

import React, { Component } from 'react'

type OnSubmitParams = {
  email: string,
  password: string
}

type Props = {
  onSubmit: (OnSubmitParams) => void
}

export default class LoginForm extends Component<Props> {
  render () {
    const handleFormSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    }

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
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
