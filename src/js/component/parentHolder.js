import React from "react";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";

const ParentHolder = ()=>{

    return (
      <div className="container-fluid">
        <Navbar/>
        <Jumbotron/>
      </div>
    )
  };

export default ParentHolder;