/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero;
	var segundonumero;
	var suma;

	var primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	var segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	suma=primernumero+segundonumero;

	alert("la suma es"+suma);

}

function restar()
{
	var primernumero;
	var segundonumero;
	var resta;

	var primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	var segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	resta=primernumero-segundonumero;

	alert("la resta es"+resta);

}

function multiplicar()
{ 
	var primernumero;
	var segundonumero;
	var multiplicacion;

	var primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	var segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	multiplicacion=primernumero*segundonumero;

	alert("la multiplicacion es"+multiplicacion);

}

function dividir()
{
	var primernumero;
	var segundonumero;
	var division;

	var primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	var segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	division=primernumero/segundonumero;

	alert("la division es"+division);

}

