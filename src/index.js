import React from "react";
import ReactDOM from "react-dom";
import * as calci from "./calculator.js";

// we can use
//import {add ,multiply , subtract ,divide} from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{calci.add(1, 2)}</li>
    <li>{calci.multiply(2, 3)}</li>
    <li>{calci.subtract(7, 2)}</li>
    <li>{calci.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
