import React, { Component } from 'react'

export default class AppComponent extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div>
        <div onClick={this.props.loginRequest}>
          Login
        </div>
        <div onClick={this.props.logout}>
          Logout
        </div>
        <div>
          {this.props.account.user && this.props.account.user.email}
        </div>
      </div>
    )
  }
}