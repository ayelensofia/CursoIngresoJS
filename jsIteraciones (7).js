function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
		{
			contador=contador+1;//tomo la misma variable
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
			acumulador=acumulador+numeroIngresado;
			respuesta=prompt("ingrese numero");//contener valor anterior y modificarlo
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN