import React from "react";
import ReactDOM from "react-dom";

//Components
import PrimeraApp from "./PrimeraApp";

//Styles
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku" edad={15} />, divRoot);
