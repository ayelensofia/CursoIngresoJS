function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
	case "Junio":
		alert("Abrigate que hace frio");
		break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
		alert("Falta para el invierno.");
		break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!");
		break;
	default:
		alert (mesDelAño);
		break;
}







}//FIN DE LA FUNCIÓN