/*Funcionalidad del Juego*/
var board = new Array(9);
var numJugadas1=0;
var numJugadas2=0;
var JugadasA = new Array(3);
var jugadasB = new Array(3);
//var positionGanadoras=[1,2,3]
var ganadoras = [ [0, 1, 2], [3, 4, 5] , [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8]];
var cudraditos=$('.li');
var turno=true;
$.each(cudraditos, function() {$(this).on('click',movimiento)});

function movimiento(evt)
{
	var position=$(evt.currentTarget).attr('id');
	markerPosition(position);
}
function isFull(position)
{
	return(board[position]==null);
}
function markerPosition(position)
{
	var id = $('#'+position);
	if(turno){
		if(isFull(position))
		{
			board[position]="fullA";
			numJugadas1++;
			id.find('i').remove();
			id.append('<i class="fa fa-circle animated rubberBand " aria-hidden="true"></i>');
			$('#mov1').text(numJugadas1);
			turno=false;
		}
	}
	else
	{
		if(isFull(position))
		{
			board[position]='fullB';
			numJugadas2++;
			id.find('i').remove();
			id.append('<i class="fa fa-heart animated rubberBand " aria-hidden="true"></i>');
			$('#mov2').text(numJugadas2);
			turno=true;
		}

	}
}
function idChampion()
{

}
/*
function comprobarGanador(marcador){
	var gana = true;
	for( var posGanadoras = 0; posGanadoras < ganadoras.length; posGanadoras++){
		gana = true;
		for( var pos = 0; pos < ganadoras[posGanadoras].length; pos++){
			gana = gana && (celdas[ganadoras[posGanadoras][pos]] == marcador);
		}
		if (gana){
			return gana;
		}
		gana = false;
	}
	return gana;
}*/