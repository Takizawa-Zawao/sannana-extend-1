import React from "react";
import { createRoot } from "react-dom/client";
import Component from "react";

export default class TestApp extends Component{
    render(){
        return <h1>React.</h1>
    }
}

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<TestApp />);