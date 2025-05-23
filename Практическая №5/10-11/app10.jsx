import React from "react";
import ReactDOM from "react-dom";

const mySuperStyles = {
  fontSize: "16px",
  backgroundColor: "black",
  border: "1px solid yellow"
};

const Alert = () => {
  return (
    <div style={mySuperStyles}>I am an alert</div>
  );
};

ReactDOM.render(<Alert />, document.querySelector("#myDiv"));