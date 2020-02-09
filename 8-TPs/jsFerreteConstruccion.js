/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantidadalam;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	cantidadalam=[2*(largo+ancho)]*3;

	alert(cantidadalam);


}
function Circulo () 
{
	var radio;
	var cantidadalambre;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	cantidadalambre= (2 * Math.PI * radio);


	alert(cantidadalambre); 

	
}
function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var cantbolsascemento;
	var cantbolcal;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	superficie=largo*ancho;
	cantbolsascemento=superficie*2;
	cantbolcal=superficie*3;

	 

	alert("se necesitan"+cantbolsascemento+"bolsas de cemento"+"y"+cantbolcal+"bolsas de cal");
	

	
}
