//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let cont = 0;
setInterval(function () {
	const seis = Math.floor(cont / 100000);
	const cinco = Math.floor(cont / 10000);
	const cuatro = Math.floor(cont / 1000);
	const tres = Math.floor(cont / 100);
	const dos = Math.floor(cont / 10);
	const uno = Math.floor(cont / 1);
	cont++;
	ReactDOM.render(
		<Home
			digitoUno={uno}
			digitoDos={dos}
			digitoTres={tres}
			digitoCuatro={cuatro}
			digitoCinco={cinco}
			digitoSeis={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
