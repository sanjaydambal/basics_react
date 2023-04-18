import React, { Component } from 'react'
import InputRef from './InputRef'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    this.FocusInput = React.createRef()
     
    }
    ClickHandler = () => {
        this.FocusInput.current.focusInput()
    }
  render() {
    return (
      <div>
        <InputRef ref={this.FocusInput}/>
        <button onClick={this.ClickHandler}> Change Focus</button>
      </div>
    )
  }
}

export default FocusInput