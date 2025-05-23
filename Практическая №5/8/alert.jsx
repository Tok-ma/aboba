import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string
};

ReactDOM.render(
  <Alert text="OMG! Something really bad has happened!" />,
  document.querySelector("#myDiv")
);