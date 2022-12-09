//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.js";
import Jumbotron from "./component/jumbotron";




//render your react application
ReactDOM.render(<Jumbotron />, document.querySelector("#app"));
