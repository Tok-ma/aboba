import React from "react";
import ReactDOM from "react-dom";

// Переменные
let age = "12";
let name = "John";

// Применение переменных
let output = <span>{name} is <strong>{age}</strong> years old</span>;

// отрисовка
ReactDOM.render(output, document.querySelector("#myDiv"));