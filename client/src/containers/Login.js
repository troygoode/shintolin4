// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { submitLogin } from '../actions/login'
import type { SubmitFormPayload } from '../actions/login' // eslint-disable-line

type Props = {
  submitLogin: Function
}

export class LoginContainer extends Component<Props> {
  static propTypes = {
    submitLogin: PropTypes.func.isRequired
  }

  onLogin = (form: SubmitFormPayload) => {
    this.props.submitLogin(form)
  }

  render () {
    return <div><LoginForm onSubmit={this.onLogin} /></div>
  }
}

const mapPropsToState = () => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  submitLogin
}, dispatch)

export default connect(mapPropsToState, mapDispatchToProps)(LoginContainer)
