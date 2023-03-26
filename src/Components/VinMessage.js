import React,{Component} from "react";
class VinMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:"Vinay is learning React"
         }
        }
         change(){
            this.setState({
                message:"Vinay learnt React"
            })
         }
   
    
    render() { 
        return ( 
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.change()}> Submit</button>
            </div>
         );
    }
}
 
export default VinMessage;