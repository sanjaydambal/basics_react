import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandle(){
        console.log("Event fired")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick