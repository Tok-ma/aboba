import React from "react";
import ReactDOM from "react-dom";

const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' }
];

const animalsInHTML = animals.map((animal, index) => (
  <li key={index}>{animal.label}</li>
));

const content = <ul>{animalsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));