$(document).ready(init);
var jugadasGanadoras=[[],[],[],[]]
function init()
{
	$('#juego').find('.fa-paw').click(movimiento);
	$('#nameGame1').text(localStorage.getItem('JugadorUno'));
	$('#nameGame2').text(localStorage.getItem('JugadorDos'));
}
function movimiento()
{
	console.log("g");
}
