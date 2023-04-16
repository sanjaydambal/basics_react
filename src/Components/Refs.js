import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setcbRef = ele =>{
        this.cbRef = ele
    }
        
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setcbRef}/>
        <button onClick={this.clickHandler}> Click</button>
      </div>
    )
  }
}

export default Refs