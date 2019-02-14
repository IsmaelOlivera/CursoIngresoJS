function mostrar()
{
  var edad;

  edad = document.getElementById("edad").value;

  if(edad >= 18) {alert("Eres mayor de edad")}
  if(edad >=13 && edad <=17){alert("Eres un adolecente")}
  if(edad <13) {alert("Eres un niño")}



}