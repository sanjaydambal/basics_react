import React, { Component } from 'react'
 class HoverCounterTwo extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
 <button onMouseOver={incrementCount}> <h1>Hovered {count}  Time</h1></button>
 </div>
    )
  }
}

export default HoverCounterTwo