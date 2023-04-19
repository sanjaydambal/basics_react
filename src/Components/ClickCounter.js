import React, { Component } from 'react'
import UpdatedComp from './withCounter'
 class ClickCounter extends Component {
    
  render() {
    const {count,incrementCount,name} = this.props
    return <button onClick={incrementCount}>  {name} Click {count} Times</button>
       }
}

export default UpdatedComp(ClickCounter,5)