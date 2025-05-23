import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool
};

ReactDOM.render(
  <Alert text="Are you sure?" show={true} />,
  document.querySelector("#myDiv")
);