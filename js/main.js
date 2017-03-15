
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
function onClickBtnHistorial() {
	//evt.preventDefault();
	getHistorial();//autoomatizado¡¡
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

/*docnetac a servidor*/
//momento n el que se esper la cocecion l sevidor
//4.25 milisegundos
function getHistorial()
{
    var url='http://test-ta.herokuapp.com/games';
  	$.ajax({
   		url:url

    }).done(function(_data)
    {
    	console.log(_data);
    	dibujarHistorial(_data);
    });
}
function dibujarHistorial(datos)
{
	var lista=$('#listaJuegos');

	//$.each(cudraditos, function() {$(this).on('click',movimiento)});
	for(var i in datos)
	{
		console.log(datos[i].loser_player)
		var html='<li class=list-group-item> Ganador :'+datos[i].winner_player+'</li>';
		lista.append(html);
	}
	
}

