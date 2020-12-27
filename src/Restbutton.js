import React,{Component} from "react";
export class Restbutton extends Component{
    restart= () => {   
        window.location.reload();
 }
    render(){
        return(<div className="button" onClick={this.restart}>reset</div>);
    }
}