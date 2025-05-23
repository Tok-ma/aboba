import React from "react";
import ReactDOM from "react-dom"; // ✅ 1. Убедитесь, что ReactDOM импортирован

const data = {
  image: "img/Dylan.png?raw=true",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter...",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};

const output = (
  <div className="card m-5">
    <img className="card-img-top" src={data.image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{data.cardTitle}</h5>
      <p className="card-text">{data.cardDescription}</p>
      <a href={data.button.url} className="btn btn-primary">
        {data.button.label}
      </a>
    </div>
  </div>
);

// ✅ 2. Проверьте, что в HTML есть элемент с id="myDiv"
ReactDOM.render(output, document.querySelector("#myDiv"));