import React from "react";
import ReactDOM from "react-dom";

const badgeStyles = {
  backgroundColor: "#17a2b8",
  color: "white",
  borderRadius: "50%",
  padding: "0.2em 0.6em"
};

const Badge = () => {
  return (
    <span style={badgeStyles}>New</span>
  );
};

ReactDOM.render(<Badge />, document.querySelector("#myDiv"));