/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

