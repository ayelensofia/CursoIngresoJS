function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
		{
			contador=contador+1;//tomo la misma variable
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
			if(numeroIngresado>0)
			{
				positivo=positivo+numeroIngresado;
			}else
			{
				

				negativo=negativo*numeroIngresado;	
				
			}
			
			respuesta=prompt("ingrese si, para continuar")//contener valor anterior y modificarlo
			

		}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN