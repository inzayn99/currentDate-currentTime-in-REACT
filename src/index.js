import React from "react";
import ReactDOM from "react-dom";

const name = "KHAN";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hello, my name is {name}</h1>
  <p>current date  is = {currDate}</p>
  <p>current time  is = {currTime}</p>

  </>,
  document.getElementById('root'));
