import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
  const colorClasses = {
    'red': 'alert-danger',
    'yellow': 'alert-warning',
    'green': 'alert-success'
  };

  return (
    <div className={`alert ${colorClasses[props.color]}`} role="alert">
      {props.text}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['red', 'yellow', 'green'])
};

ReactDOM.render(
  <>
    <Alert text="This is a danger alert - check it out!" color="red" />
    <Alert text="This is a warning alert - check it out!" color="yellow" />
    <Alert text="This is a success alert - check it out!" color="green" />
  </>,
  document.querySelector("#myDiv")
);