
function mostrar()
{
  var mascota1;
  var mascota2;
  var peso1;
  var peso2;
  var resultado;
  var cuenta;

  mascota1 = prompt("ingresar nombre");
  mascota2 = prompt("ingresar nombre");
  peso1 = parseInt(prompt("ingresar peso")); 
  peso2 = parseInt(prompt("ingrese peso"));
  resultado = mascota1 + peso1;
  resultado = mascota2 + peso2;
  cuenta = parseInt(peso1 + peso2);
  
  alert("Usted tiene dos macotas " + mascota1 +" y " + mascota2 + " que pesan " + peso1 + " y " + peso2 + " kilos, la suma de los kilos es " + cuenta); 

}
