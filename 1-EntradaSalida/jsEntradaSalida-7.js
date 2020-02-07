/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//definicion de variables
	var primernumero;
	var segundonumero;
	var resultadoDeLaSuma;
	var resultadoDeLaresta;
	//sino utilizo como palabra lo transformo en numero
	primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);

	segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	resultadoDeLaSuma=primernumero+segundonumero;
	resultadoDeLaresta=primernumero-segundonumero;

	console.log(resultadoDeLaSuma);

}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

