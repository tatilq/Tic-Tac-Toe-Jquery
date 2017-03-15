
$(document).ready(init);

var currentSection = null;
function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
	$('#btn-historial').click(onClickBtnHistorial);
	$('#inicioLi').click(onClickInicio);
	$('#historialLi').click(onClickBtnHistorial);
	$("#jugador1").keyup(validaJugador1); 
  	$("#jugador2").keyup(validaJugador2); 
 	//TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}
/*-------------------------------------------VALIDA JUGADOR1 SEGUN FORMATO VALIDO----------------------------------*/
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
//-------------------------------------------VALIDA EXPRESION REGULAR DE SOLO LETRAS----------------------------------// 
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
    	$('#nameGame1').text($("#jugador1").val()+": ");
		$('#nameGame2').text($("#jugador2").val()+": ");
		
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

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);
	nextSection.addClass('visible');
	//TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}
/**********************************PARTE DEL HISTORIAL*****************************/
function onClickBtnHistorial() {
	getHistorial();
	gotoSection('historial');
}

function getHistorial()
{
    var url='http://test-ta.herokuapp.com/games';
  	$.ajax({
   		url:url

    }).done(function(_data)
    {
    	dibujarHistorial(_data);
    });
}
function dibujarHistorial(datos)
{
	var lista=$('#listaJuegos');
	for(var i in datos)
	{
		var html='<li class="list-group-item" id="'+datos[i].id+'">'+datos[i].winner_player+ 
		" le gano a "+datos[i].loser_player+" en "+datos[i].number_of_turns_to_win+
		" movimientos"+'<button class="pull-right  verComentarios" > Comentar</button></li>';
		lista.append(html);
	}
	//aqui se enlistan los eventos de eta seccion
	$('.verComentarios').click(onClickVerComentarios);
	
}

function onClickVerComentarios()
{
	getComentariosJuego($(this).parent().attr("id"));
	gotoSection('comentarios');
}
function getComentariosJuego(id)
{
	var url='http://test-ta.herokuapp.com/games/'+id+'/comments';
  	$.ajax({
   		url:url
    }).done(function(_data)
    {
    	dibujarComentarios(_data);
    });
}
function dibujarComentarios(datos)
{
	var lista=$('#listaComentarios');
	for(var i in datos)
	{
		var html='<li class="list-group-item">'+datos[i].name+ " dice: "+datos[i].content;
		lista.append(html);
	}
	//aqui se enlistan los eventos de eta seccion
	//$('.verComentarios').click(onClickVerComentarios);
}