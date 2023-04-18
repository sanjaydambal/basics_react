import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    const {name} = this.props
    return (
      <>
      <h1>Hi {name}</h1>
      <strong> {name} is a solution Architect</strong> 
      </>
    )
  }
}
