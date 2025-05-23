import React from "react";
import ReactDOM from "react-dom";

const PrintHello = () => {
    return <h1>I Love React</h1>;
}

ReactDOM.render(<PrintHello />, document.querySelector("#myDiv"));