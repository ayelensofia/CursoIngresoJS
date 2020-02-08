/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;
	var aumento;

	porcentaje=10;
	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);
	aumento=porcentaje*importe/100;
	resultado=importe+aumento;

	document.getElementById('resultado').value=resultado;


	
}
