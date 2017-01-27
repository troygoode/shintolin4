// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'

class Index extends Component {
  onLogin = (form) => {
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
