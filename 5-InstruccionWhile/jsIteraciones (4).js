function mostrar()
{

	var numero = prompt("ingrese un número entre 1 y 9.");

	while (numero < 0 || numero > 9)
	{
    numero = prompt("ingrese otro numero")
		document.getElementById("Numero") = numero
		break;
	}


}//FIN DE LA FUNCIÓN
