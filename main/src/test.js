alert("pre-test");
/*
import React from "react";
import { createRoot } from "react-dom/client";
import Component from "react";
*/
export default class TestApp extends React.Component{
    render(){
        return <h1>React.</h1>;
    };
}

alert("test");
const app = document.getElementById("app");
const root = ReactDom.createRoot(app);
root.render(<TestApp />);