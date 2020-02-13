function mostrar()
{
//tomo la edad  

			var edad;
		edad=document.getElementById('edad').value;
		edad=parseInt(edad);
		if(edad>12 && edad<18)//&& trabajar por cortocicuito
		{
			alert("sos mayor");
		
		}


}//FIN DE LA FUNCIÓN