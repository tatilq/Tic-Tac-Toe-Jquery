
$(document).ready(init);

var currentSection = null;
function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
	$('#btn-historial').click(onClickBtnHistorial);
	$('#inicioLi').click(onClickInicio);
	$('#historialLi').click(onClickHistorial);
	$("#jugador1").keyup(validaJugador1); 
  	$("#jugador2").keyup(validaJugador2); 
	//TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}
//-------------------------------------------VALIDA JUGADOR1 SEGUN FORMATO VALIDO----------------------------------//
function validaJugador1()
{
	var isValid=false;
	var jugador1=$("#jugador1").val();

	if(jugador1.length>0 && isAlphabetic(jugador1))
	{
		$('#jugador1Error').html("<small style='color:green;'>Correcto ✔</small>");
		isValid=true;
	}
	else
		$('#jugador1Error').html("<small style='color:red;'>Debes escribir solo letras </small>");
	
	return isValid;
}
//-------------------------------------------VALIDA JUGADOR2 SEGUN FORMATO VALIDO----------------------------------//
function validaJugador2()
{
	var isValid=false;
	var jugador2=$("#jugador2").val();

	if(jugador2.length>0 && isAlphabetic(jugador2))
	{
		$('#jugador2Error').html("<small style='color:green;'>Correcto ✔</small>");
		isValid=true;
	}
	else
		$('#jugador2Error').html("<small style='color:red;'>Debes escribir solo letras </small>");
	
	return isValid;
}
//-------------------------------------------VALIDA EXPRESION REGULAR DE SOLO LETRAS----------------------------------// 
function isAlphabetic(cadena)
{
  return(cadena.match(/^[a-zA-Z\s]*$/));
}
/***/
function onClickInicio() {
	gotoSection('saludo');
}
function onClickHistorial() {
	gotoSection('historial');
}
function onClickBtnSaludo() {
	gotoSection('nombres');
}
function onClickBtnNombre() {

	var jugador1=$("#jugador1").val();
  	var jugador2=$("#jugador2").val();
  	validaJugador1(),validaJugador2();

	if(validaJugador1()&&validaJugador2())
	{
		//window.localStorage('JugadorUno',jugador1);
    	//window.localStorage('JugadorDos',jugador2);
		swal({
      		title: "¡Formulario Completo!",
      		imageUrl: "img/goods.png"
    	});
    	gotoSection('juego');
	}
	else
	{
		swal({
      		title: "¡Formulario Incompleto!",
      		text:"LLenar todos los campos correctamente",
      		imageUrl: "img/bads.png"
    	});
	}
	
}
function onClickBtnHistorial() {
	gotoSection('historial');
}
function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	//TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}