import React, { Component } from 'react'

class UserlLog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }
  render()
  {
    return this.state.isLoggedIn && <div>Welcome Lakshmikant</div> 
  }
  //  {
  //   return (
  //     this.state.isLoggedIn ?
  //       <div>Welcome Lakshmikant</div>
  //       : <div>Welcome Guest</div>)

    // let message;
    // if(this.state.isLoggedIn){
    //   message=<div> Welcome Devika</div>
    // }
    // else{
    //   message=<div> welcome guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return<div> Hi Devika</div>
    // }
    // else{
    //     return<div> Hi Guest</div>
    // }

  }
// }

export default UserlLog