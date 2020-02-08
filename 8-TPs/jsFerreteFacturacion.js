/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;

	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);
	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);
	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);

	suma=preciouno+preciodos+preciotres;
	alert(suma);
}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var promedio;
	var suma;

	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);
	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);
	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);
	suma=preciouno+preciodos+preciotres;
	promedio=suma/3;
	alert(promedio);
	


}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;
	var preciofinal;
	var porcentaje;
	var aumento;

	porcentaje=21
	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);
	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);
	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);
	suma=preciouno+preciodos+preciotres;
	aumento=suma*porcentaje/100;
	preciofinal=suma+aumento;
	alert(preciofinal);
	
}