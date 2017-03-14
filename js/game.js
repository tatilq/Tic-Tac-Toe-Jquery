/*Funcionalidad del Juego*/
var board = new Array(9);
var numJugadas1=0;
var numJugadas2=0;
var cudraditos=$('.li');
var turnoGame1=true;
$.each(cudraditos, function() {$(this).on('click',movimiento)});

function movimiento(evt)
{
	var position=$(evt.currentTarget).attr('id');
	markerPositionJugador1(position);
	markerPositionJugador2(position);
	//console.log(posicion);
}
function isFull(position)
{
	return(board[position]==null);
}
function markerPositionJugador1(position)
{
	var id = $('#'+position);
	if(isFull(position))
	{
		board[position]="full";
		//console.log(board[position]);
		numJugadas1++;
		console.log("hol");
		id.find('i').remove();
		id.append('<i class="fa fa-circle-o" aria-hidden="true"></i>');
		$('#mov1').text(numJugadas1);
	}
}
function markerPositionJugador2(position)
{
	var id = $('#'+position);
	if(turnoGame1){
		if(isFull(position))
		{
			board[position]="full";
			//console.log(board[position]);
			numJugadas2++;
			console.log("hol");
			id.find('i').remove();
			id.append('<i class="fa fa-heart" aria-hidden="true"></i>');
			$('#mov2').text(numJugadas1);
			turnoGame1=false;
		}
}