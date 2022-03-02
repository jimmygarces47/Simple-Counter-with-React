import propTypes from "prop-types";

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div
			className="container d-flex justify-content-center  align-items-center d-inline p-2"
			style={{ backgroundColor: "black" }}>
			<i
				class="fa-thin  fa fa-clock"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}></i>
			<div
				className="seis d-inline p-2"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoCinco % 10}
			</div>
			<div
				className="cinco d-inline p-2"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoCinco % 10}
			</div>
			<div
				className="cuatro d-inline p-2"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoCuatro % 10}
			</div>
			<div
				className="tres d-inline p-2"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoTres % 10}
			</div>
			<div
				className="dos d-inline p-2 "
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoDos % 10}
			</div>
			<div
				className="uno d-inline p-2"
				style={{
					color: "white",
					backgroundColor: "#151515",
					fontSize: "40px",
				}}>
				{props.digitoUno % 10}
			</div>
		</div>
	);
};
Home.proptype = {
	digitoSeis: propTypes.number,
	digitoCinco: propTypes.number,
	digitoCuatro: propTypes.number,
	digitoDos: propTypes.number,
	digitoTres: propTypes.number,
	digitoUno: propTypes.number,
};
export default Home;
