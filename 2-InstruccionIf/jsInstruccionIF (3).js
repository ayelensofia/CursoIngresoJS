function mostrar()
{
//tomo la edad  
		var edad;

		edad=document.getElementById('edad').value;
		edad=parseInt(edad);


	if(edad>17)
	{
		alert("es mayor");
	}
	else
	{
		alert("es menor");
	}
}//FIN DE LA FUNCIÓN