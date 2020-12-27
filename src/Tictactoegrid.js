import React,{ Component } from "react";
import Cell from "./Cell";
import "./tictactoe_style.css";

export default class Tictactoegrid extends Component{

    constructor(props){
        super(props);
        this.state = {
            playerturn : 0
        };
    }
    changeTurn = () =>{
        this.setState({
            playerturn : 1 - this.state.playerturn
        });
    }
    getGrid = () =>{
        let gridelement = [];
        for(let i=0; i<3; i++){
            let gridrowelement = [];
            for(let j=0;j<3;j++){
                gridrowelement.push(
                < Cell
                 imagetype={this.state.playerturn}
                 changeTurn={this.changeTurn}
                />);
            }
            gridelement.push(<div className="row">{[...gridrowelement]}</div>);
        }
        return ([...gridelement]);
    }

    render(){
        return(
            <div className="col">{this.getGrid()}</div>
        );
    }
    
}