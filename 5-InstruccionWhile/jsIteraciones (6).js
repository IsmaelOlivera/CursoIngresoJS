function mostrar()
{

	var contador=0;
  var resultado=0;
  var usuario;

  while(contador <= 4)
  {
        contador++
        usuario = prompt("ingrese un numero");
        usuario = parseInt(usuario);



      while(isNaN(usuario))
      {
        usuario = prompt("ingrese un numero");


      }
      usuario = parseInt(usuario);
      resultado = resultado + usuario;   //resultado += usuario//


  }



document.getElementById('suma').value=resultado;
document.getElementById('promedio').value=resultado/5;

}//FIN DE LA FUNCIÓN
