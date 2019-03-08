import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Πόλη..."/>
		<input type="text" name="country" placeholder="Χώρα..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;