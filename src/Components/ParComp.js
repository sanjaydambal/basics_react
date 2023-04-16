import React, { Component } from 'react'
// import PureComp from './PureComp'
// import RegComp from './RegComp'
import MemoComp from './MemoComp'


class ParComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sanjay"
      }
    }
    componentDidMount()
{
    setInterval(()=>{
        this.setState({
            name:"sanjay"
        })
    },2000)
   }
  render() {
   console.log("parcomp");
    return (
      <div>
        ParComp
        {/* <RegComp name= {this.state.name}/>
        <PureComp name= {this.state.name}/> */}
        <MemoComp name = {this.state.name}/>
        </div>
    )
  }
}

export default ParComp