$(document).ready(init);

var currentSection = null;
var currentGame; 

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
	$('#boton').click(onClickBtn);
	$('#btn-historial').click(onClickBtnHistorial);
	$('#btn-comentar').click(onClickBtnComentar);
	$('#lista-juegos').on('click','button',onClickBtnItemJuego);
	
	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}


function onClickBtnItemJuego(){
	var idGame=($(this).parent().data('idgame'));
	//console.log(idgame);
	//getSingleGame(idGame);
	gotoSection('historial-detalle');
	getComentarios(idGame);
	currentGameID = idGame; 
}

function onClickBtnSaludo() {
	
	gotoSection('nombres');
}

function onClickBtnHistorial(evt){
	
	evt.preventDefault();
	gotoSection('historial');
	getHistorial();
	
}

function onClickBtnComentar(){
	enviarComentario(currentGameID, $('#name').val(), $('#content').val());
}

function enviarComentario(_idGame,_name,_content){
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type:'POST',
		data: {
				comment:{
					name:_name, content:_content, game_id:_idGame
	}
	}}).done(function(_data){
		console.log(_data);
		getComentarios(_idGame);
	});
}


function onClickBtnNombre() {
	var jugadorUno = $('#uno');
	var jugadorDos = $('#dos');
	//console.log(jugadorUno.val());
	if (jugadorUno.val()=='' || jugadorDos.val()=='') {
		alert('Necesita llenar campos');
	}else{
		var jugadorUno = $('#uno').val();
		localStorage.setItem('name1', jugadorUno);
		
		var jugadorDos = $('#dos').val();
		localStorage.setItem('name2', jugadorDos);
		
		
		gotoSection('juego');
	} 
	
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);
	console.log(nextSection);
	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}

function onClickBtn(){
	window.location.reload();
}

function getHistorial() {
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/'
	}).done(function (_data) {
		dibujarHistorial(_data);
	});
}

function getSingleGame(_idGame){
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/'+_idGame,
		type: 'GET'
	}).done(function (_data){
		console.log(_data);
	})
}

function dibujarHistorial(_datos) {
	//console.log(_datos);
	var lista = $('#lista-juegos');

	for (var i in _datos) {
		console.log(_datos[i].winner_player);

		var html = '<li data-idgame="'+ _datos[i].id +'" class="list-group-item">' + _datos[i].winner_player + ' le gano a '+ _datos[i].loser_player +' en ' + _datos[i].number_of_turns_to_win + ' movimientos <button class="btn w-M br-0 stl-1-blue">Comentar</button></li>';
		lista.append(html);
	}
}


function getComentarios(_idGame){
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type: 'GET'
	}).done(function (_data){
		console.log(_data);
		dibujarComentarios(_data);
	})
}

function dibujarComentarios(_datos) {
	//console.log(_datos);
	var lista = $('#lista-comentarios');
	lista.empty();

	for (var i in _datos) 
	{
		
		var html = '<li class="list-group-item">'+_datos[i].name+' dice: <p>'+ _datos[i].content +'</p></li>';
		lista.append(html);
	}
}