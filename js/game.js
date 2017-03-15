/*Funcionalidad del Juego*/
var board = new Array(9);
var numJugadas1=0;
var numJugadas2=0;
var llenoA="fullA";
var llenoB="fullB";
var exitPosition = [ [0, 1, 2], [3, 4, 5] , [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8]];
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
	if(turno)
	{

		if(isFull(position))
		{
			board[position]=llenoA;
			numJugadas1++;
			id.find('i').remove();
			id.append('<i class="fa fa-circle animated rubberBand " aria-hidden="true"></i>');
			$('#mov1').text(numJugadas1);
			turno=false;
			if(isChampion(llenoA))
			{
	   			swal({
      				title: "¡Felicidades "+$("#jugador1").val()+" Ganaste!",
      				imageUrl: "img/goods.png"
    			});
			}
		}
	}
	else
	{
		if(isFull(position))
		{
			board[position]=llenoB;
			numJugadas2++;
			id.find('i').remove();
			id.append('<i class="fa fa-heart animated rubberBand " aria-hidden="true"></i>');
			$('#mov2').text(numJugadas2);
			turno=true;
			if(isChampion(llenoB))
			{
				swal({
      				title: "¡Felicidades "+$("#jugador2").val()+" Ganaste!",
      				imageUrl: "img/goods.png"
    			});
			}
		}

	}
}
function isChampion(marcador)
{
	var isValid = false;
	for( var i = 0; i < exitPosition.length; i++)
	{
		isValid = true;
		for( var j = 0; j < exitPosition[i].length; j++)
		{
			isValid = isValid && (board[exitPosition[i][j]] == marcador);
			if(true)
			{
				console.log(board[exitPosition[i][j]]);
			}

		}

		if (isValid)
		{
			return isValid;
		}
	}
	return isValid;
}
