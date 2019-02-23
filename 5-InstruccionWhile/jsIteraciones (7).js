function mostrar()
{

	var contador=0;
  var resultado=0;
  var respuesta=confirm("¿ingresar numero?");
  var usuario;

  while(respuesta)
  {
        contador++;
        usuario = prompt("ingrese un numero");
        usuario = parseInt(usuario);



      while(isNaN(usuario))
      {
        usuario = prompt("ingrese un numero");
      }
      usuario = parseInt(usuario);
      resultado = resultado + usuario;   //resultado += usuario//
      respuesta = confirm("¿ingresar nuevo numero?");


  }



document.getElementById('suma').value=resultado;
document.getElementById('promedio').value=resultado/contador;


}//FIN DE LA FUNCIÓN
