/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;//defino variable
	nombre= document.getElementById('elNombre').value;
	alert(nombre);
	document.getElementById('elNombre').value="juan pablo segundo";
}


