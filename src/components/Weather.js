import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Τοποθεσία: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Θερμοκρασία: 
	 		<span className="weather__value"> { props.temperature }	°C </span>
			Ελάχιστη: <span className="weather__value"> { props.temp_min } °C </span><br></br>
			Μέγιστη: <span className="weather__value"> { props.temp_max } °C </span>
	 	</p> 
	 }
	 { 	
	 	props.clouds >= 0 && <p className="weather__key"> Συννεφιά: 
	 		<span className="weather__value"> { props.clouds } %</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Yγρασία: 
	 		<span className="weather__value"> { props.humidity } %</span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Καιρικές Συνθήκες: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;