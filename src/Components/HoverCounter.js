import React, { Component } from 'react'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrmentcount = () => {
        this.setState(prevState => {
            return {count : prevState.count+1}
        })
    }
  render() {
    const {count} = this.state
    return (
        
      <div onMouseOver={this.incrmentcount}>Hovered {count} Times</div>
    )
  }
}

export default HoverCounter