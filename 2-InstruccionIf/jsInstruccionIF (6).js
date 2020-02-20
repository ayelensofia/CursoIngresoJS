function mostrar()
{
//tomo la edad  

	var edad;
		edad=document.getElementById('edad').value;
		edad=parseInt(edad);
		if(edad>17)//lo que detecta el microprocesador, devuelve true o false
		{
			alert("es mayor de edad");
		}
		else
		{	
			if(edad>12 && edad<18)
			alert("es adolescente");
		}
			else

			{alert("es niño/a");}			
		
		
		}

}//FIN DE LA FUNCIÓN