import React from "react";
import ReactDom from "react-dom";
import Component from "react";

export default class TestApp{
    render(){
        return <h1>React.</h1>
    }
}

const app = document.getElementById("app");
ReactDom.render(<TestApp />, app);