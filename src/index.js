import React from "react";
import ReactDOM from "react-dom";

//Components
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

//Styles
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<CounterApp />, divRoot);
