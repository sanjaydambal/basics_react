import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Submit the Assignment"
      }
      this.change = this.change.bind(this)
    }
change(){
    this.setState({
        message:"Assignment Submitted"
    })
}
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.change}>Submit</button>
      </div>
    )
  }
}

export default EventBind