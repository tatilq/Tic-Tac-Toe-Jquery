
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
  	$("#btnEnviarComentario").click(enviarComentarios); 	

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
	{
		$('#jugador2Error').html("<small style='color:red;'>Debes escribir solo letras </small>");
	}
	
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
		var html='<li class="list-group-item" ><span>'+datos[i].id+'</span>'+datos[i].winner_player+ 
		" le gano a "+datos[i].loser_player+" en "+datos[i].number_of_turns_to_win+
		" movimientos"+'<button class="pull-right  "  id="verComentarios" onclick="onClickVerComentarios('+datos[i].id+')"> Comentar</button></li>';
		lista.append(html);

	}
	//$('#verComentarios').click(onClickVerComentarios);
}
function onClickVerComentarios(id)
{
	console.log(id);
	localStorage.setItem('idGame',id);
	getComentarios(id);
	gotoSection('comentarios');
}
function getComentarios(id)
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
		var html='<li class="list-group-item" >'+datos[i].name+ " dice: "+datos[i].content+'</li>';
		lista.append(html);
	}
}

/*******************************************************FUNCION PARA MANDAR LOS COMENTARIOS**************************************/
function enviarComentarios()
{
	var idGame=localStorage.getItem('idGame');
	var name=localStorage.getItem('nombreComenta');
	var content=localStorage.getItem('content');
	console.log(idGame);
	if(validaDatosEnvio()){
		var url='http://test-ta.herokuapp.com/games/'+idGame+'/comments';
	  	$.ajax({
	   		url:url,
	   		type:'POST',
	   		data:{comment:{name:name, content:content, game_id:idGame}}
	    }).done(function(_data)
	    {
	    	//aqui hacer lgo pra que se actualice
	    	//limpiarDatos();
	    });
	}
}
function validaDatosEnvio()
{
	var isValid=false;
	if($('#nombreComenta').val().length>0 && $('#content').val().length>0)
	{
		if(isAlphabetic($('#nombreComenta').val()) && isAlphabetic($('#content').val()))
		{
			localStorage.setItem('nombreComenta',$('#nombreComenta').val());
			localStorage.setItem('content',$('#content').val());
			isValid=true;
		}
	}
	return isValid;
}

function reiniciar()
{

  window.location="index.html";
} 
/***********************************************MAND UN POST DEL GNADOR *****************/

function enviarhistorial(){
	var ganador=localStorage.getItem('ganador');
	var perdedor=localStorage.getItem('perdedor');
	var jugadas=localStorage.getItem('numJugadas');
	$.ajax({
		url:'http://test-ta.herokuapp.com/games',
		type:'POST',
		data:{
			game:
			{ winner_player:ganador, loser_player:perdedor, number_of_turns_to_win:jugadas }}
		}).done(function(_data){

	});
}

