import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron.js";

var ParentHolder = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
      </div>
    )
  }
});

export default ParentHolder;