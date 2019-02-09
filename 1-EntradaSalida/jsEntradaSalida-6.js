/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primera
    var segunda
    var suma

    primera = document.getElementById ("numeroUno").value,
    segunda = document.getElementById ("numeroDos").value;
   primera = parseInt(primera);
  segunda = parseInt(segunda);
  suma = (primera+segunda);
  alert("la suma es " + suma)
  
}   

