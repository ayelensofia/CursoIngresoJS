function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;



	while(contador<5)
		{
			contador=contador+1;//tomo la misma variable
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
			acumulador=acumulador+numeroIngresado;//contener valor anterior y modificarlo
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN