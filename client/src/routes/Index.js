// @flow

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import type { FormPayload } from '../components/LoginForm' // eslint-disable-line

export class Index extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired
  }

  onLogin = (form: FormPayload) => {
    this.props.action('LOGIN_SUBMITTED', form)
  }

  render () {
    return <div><LoginForm onSubmit={this.onLogin} /></div>
  }
}

export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return {
      action: (type, payload) => dispatch({type, payload})
    }
  }
)(Index)
