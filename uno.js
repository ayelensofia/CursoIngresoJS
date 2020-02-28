
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var contador;
	var contadortemp;
	var acumuladortemp;



	nombre=prompt("ingrese nombre");
	edad=prompt("ingrese edad");
	edad=parseInt(edad);
	sexo=prompt("ingrese sexo con f o m");
	temperatura=prompt("ingrese temperatura");
	temperatura=parseInt(temperatura);

	while(isNaN(nombre))
		{
			nombre=prompt("reingrese nombre");
			if(nombre==nombre)
			{
				contadortemp=temperatura
			}

			 }

		while(edad>0 && edad<100)
		{

			edad=prompt("reingrese edad");
			edad=parseInt(edad);
			
			if(temperatura>38 && (edad<13 || edad<61))
			 {
			 	alert("estas en riesgo"+nombre);
			 
			  }
			 }

		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("reingrese sexo");
			if(sexo==sexo)
			{
				contadortemp=temperatura
			}
		}

		while(temperatura>0 && temperatura<37)
			{
				temperatura=prompt("reingrese temperatura");

				if(edad<13 || edad>59)
				{
					temperatura==
				}
		}

		while(temperatura)

	

		
	


	
		
}
