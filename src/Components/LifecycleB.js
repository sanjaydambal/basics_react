import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sanjay"
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
       console.log("LifecycleB getDerivedFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log("LifecycleB getSnapshotBeforeUpdate"); 
        return null
    }
componentDidUpdate(){
    console.log("LifecycleB componentDidUpdate");
}
  render() {
    console.log("LifecycleB render");
    return (
      <div>LifecycleB
     
      </div>
    )
  }
}

export default LifecycleB