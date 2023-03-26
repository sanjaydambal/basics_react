import React, { Component } from 'react'
import ChildComp from './ChildComp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Devika Amma"
      }
      this.callParent = this.callParent.bind(this)
    }
    callParent(childName){
        alert(` Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComp greetHandler = {this.callParent}/>
      </div>
    )
  }
}

export default ParentComp