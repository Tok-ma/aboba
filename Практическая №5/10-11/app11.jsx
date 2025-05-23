import React from "react";
import ReactDOM from "react-dom";

const handleClick = () => {
  console.log("I was clicked!");
};

const Alert = () => {
  return (
    <button onClick={handleClick}>Click me</button>
  );
};

ReactDOM.render(<Alert />, document.querySelector("#myDiv"));