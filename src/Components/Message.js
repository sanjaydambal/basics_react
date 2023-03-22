import React,{Component} from "react";
class Message extends Component {
    constructor() {
        super();
        this.state={
            message:"Ignition is Off"
        }
    }
   changeMethod() {
    this.setState({
        message:"Ignition is On"
    })
    
   } 
    
   
    render() { 
        return ( 
            <div>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.changeMethod()}> Start </button>
            </div>
         )
    }
}
 
export default Message;