/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var porcentaje;
	var resultado;

	porcentaje="25";
	var importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	descuento=porcentaje*importe/100;
	resultado=importe-descuento;
	
	

}
