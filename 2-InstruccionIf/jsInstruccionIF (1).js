function mostrar()
{
	
		 	//	edad==15 la igualdad es igual a la igualdad
			// edad!=15 no es igual
		var edad;
		edad=document.getElementById('edad').value;
		edad=parseInt(edad);
		if(edad>17)//lo que detecta el microprocesador, devuelve true o false
		{
			alert("es mayor");
		}
		else
		{	
			alert("es menor");  
		}	
	}


}//FIN DE LA FUNCIÓN