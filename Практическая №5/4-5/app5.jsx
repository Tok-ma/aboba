import React from "react";
import ReactDOM from "react-dom";

const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];

const animalsInHTML = animals.map((animal, index) => (
  <li key={index}>{animal}</li>
));

const content = <ul>{animalsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));