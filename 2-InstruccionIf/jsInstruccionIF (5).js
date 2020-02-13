function mostrar()
{
//tomo la edad  
		var edad;
		edad=document.getElementById('edad').value;
		edad=parseInt(edad);
		if(edad>17 || edad<13)//&& trabajar por cortocicuito
		{
			alert("no es adolescente");
		
		}


}//FIN DE LA FUNCIÓN