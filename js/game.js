/*Funcionalidad del Juego*/
var board = new Array(9);
var numJugadas1=0;
var numJugadas2=0;
var cudraditos=$('.li');
var turno=true;
$.each(cudraditos, function() {$(this).on('click',movimiento)});

function movimiento(evt)
{
	var position=$(evt.currentTarget).attr('id');
	markerPosition(position);
	//console.log(posicion);
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
			board[position]="full";
			numJugadas1++;
			id.find('i').remove();
			id.append('<i class="fa fa-circle" aria-hidden="true"></i>');
			$('#mov1').text(numJugadas1);
			turno=false;
		}
	}
	else
	{
		if(isFull(position))
		{
			board[position]="full";
			numJugadas2++;
			id.find('i').remove();
			id.append('<i class="fa fa-heart" aria-hidden="true"></i>');
			$('#mov2').text(numJugadas2);
			turno=true;
		}

	}
}