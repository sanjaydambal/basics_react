import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <>
      <h1>Hi {this.props.name}</h1>
      {this.props.children}
      </>
    )
  }
}
