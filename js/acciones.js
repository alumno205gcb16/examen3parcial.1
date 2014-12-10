// JavaScript Document
$(document).ready(function(e) {
    //watchID se refiere a la aceleracion 'actual'
	//
	var watchID = null;
	document.addEventListener("deviceready",Dispositivo_Listo, false);
	//cuando esta listo el dispositivo
	//
	function Dispositivo_Listo(){
		comienza();
	}
	//empíeza la 'obsevacion' de la aceleracion
	//
	function comienza(){
	var opciones = {frequency:2000 };
	watchID = navigator.accelerometer.watchAcceleration(Correcto, Error, Opciones);
	navigator.geolocation.getCurrentPosition(Localiza, Errorlocalizacion);
	}
	// detiene la 'obsevacion' de la aceleracion
	//
	function Detente () {
		if (watchID){
			navigator.accelerometer.clearWatch(watchID);
			watchID = null
		}
	}
	// Correcto: toma una captura de tu aceleracion
	//
	function Correcto(acceleration){
		var element = document.getElementById('acelerometro');
		element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />'+
		                    'Aceleracion en Y: ' + acceleration.y  + '<br />'+
							'Aceleracion en Z: ' + acceleration.z + '<br />'+
							'intervalo: ' + acceleration.timestamp + '<br />';
	}
	//Error:falta al obtener la aceleracoion
     //
	function Error(){
		alert('Errror');
	}
	//Exito al localizar//
	function Localiza(posicion){
		var elememt = document.getElementById('geolocalizacion');
		element.innerHTML = 'Latitud: '   + posicion.coords.latitude   + '<br />' +
                                                              'Longitud: ' +posicion.coords.longitude   + '<br />' +
				   'Altitud: '   + posicion.coords.latitude   + '<br />' +
                                                             'Precision: ' +  posicion.coords.accuracy + '<br />'  +
                                                               'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '<br />' +
                                                                'Direccion: '  +  posicion.coords.heading  + '<br />' +
                                                                'velocidad: ' + posicion.coords.speed + '<br />' + 
                                                                'Intervalo: ' + posicion.timestamp + '<br /> ';
}
//Error en la geolocalizacion 
//
function ErrorLocalizacion(error){
alert('codigo: ' +error.code + '/n'+
'mensajes: ' + error.message + '/n');
}
	});//documento ready