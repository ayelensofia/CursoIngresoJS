function mostrar()
{
	var flag; //asignar valor de verdad a la variable
	//var contador=0;//saber el primer numero que ingreso
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta=true;
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	respuesta=prompt("desea ingresar otro numero?");//validar respuesta

	//while(respuesta!=='true')
	while(respuesta==true)
	//while(isNaN(numero) || (numero<1 || numero>10))
	{
		
		if(flag==true)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}else
			{
				if(numero<minimo)
				{
					minimo=numero;
				}
			}
		}
		flag=false;
		//contador++;
		
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;

		//respuesta=confirm("desea ingresar otro numero?")estandariza la respuesta
		//respuesta=respuesta.toLowerCase(); una forma de validar la respuesta
	}




}//FIN DE LA FUNCIÓN