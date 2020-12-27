import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div className="welcome">It TicTacToe Time Lets Play!!!</div>
        );
    }
}