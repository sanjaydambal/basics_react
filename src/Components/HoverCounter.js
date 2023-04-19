import React, { Component } from 'react'
import UpdatedComp from './withCounter'

 class HoverCounter extends Component {
  
  render() {
    const {count,incrementCount} = this.props
    return (
        
      <div onMouseOver={incrementCount}> Hovered {count} Times</div>
    )
  }
}

export default UpdatedComp(HoverCounter,9) 