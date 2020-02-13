/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random() * 100)+1;      // returns a random integer from 0 to 10

		//alert(numeroSecreto );
	console.log(numeroSecreto);

}

function verificar()


	var numeroingresado;

	numeroingresado=document.getElementById('numero').value;
	numeroingresado=parseInt(numeroingresado);

	if(numeroingresado==numeroSecreto)
	{
		alert("sos una genia");
	}
	else
	{
		if(numeroingresado>numeroSecreto)
			alert("te pasaste");
	}
		else
		{
			alert("te falto");
		}
