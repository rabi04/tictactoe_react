import React,{ Component } from "react";
import cross from "./cross.png";
import circle from "./circle.png";

export default class Cell extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked : -1,
            
        }
    }
    

    changeClicked =()=>{
        if(this.state.clicked === -1){
            this.setState({
                clicked : this.props.imagetype
           });
            this.props.changeTurn();
      //     console.log(mat[this.props.row_pos][this.props.column_pos]);
        } 
    }
    getcellcontain = () =>{
        if(this.state.clicked === -1)
        return(<div className="box">click</div>);
        else if(this.state.clicked === 0)
        return(<span>X</span>);
        else if(this.state.clicked === 1)
        return(<span>O</span>);
    }

    render(){
        return(<div className="cell" onClick={this.changeClicked} >{this.getcellcontain()}</div>);
    }
}