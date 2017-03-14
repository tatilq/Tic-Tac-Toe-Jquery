
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
  	$('#juego').find('.fa-paw').click(movimiento);

	//TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}
function  validaLocalStorageJugador1()
{
	return (localStorage.getItem('JugadorUno') != null);
}
/*******************************************************/
function  validaLocalStorageJugador2()
{
	return(localStorage.getItem('JugadorDos') != null);
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

  	validaJugador1();
  	validaJugador2();

	if(validaJugador1()&&validaJugador2())
	{
    	$('#nameGame1').text("Gamer 1:"+$("#jugador1").val());
		$('#nameGame2').text("Gamer 2:"+$("#jugador2").val());
		
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

/**VALIDACIONES DE JUGADAS POSIBLES*/
function movimiento()
{
	console.log("0");
}