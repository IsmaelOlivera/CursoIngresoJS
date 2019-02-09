/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var primera;
    var segunda;
    var resultado;

    primera = parseInt(document.getElementById("numeroUno").value);
    segunda = parseInt(document.getElementById("numeroDos").value);
    resultado = primera + segunda;
  
    alert("la suma es " + resultado);
}

function restar()
{
    var primera;
    var segunda;
    var resultado;

    primera = parseInt(document.getElementById("numeroUno").value);
    segunda = parseInt(document.getElementById("numeroDos").value);
    resultado = primera - segunda;
  
    alert("la resta es " + resultado);
}

function multiplicar()
{ 
	var primera;
    var segunda;
    var resultado;

    primera = document.getElementById ("numeroUno").value;
    segunda = document.getElementById ("numeroDos").value;

    primera = parseInt (primera);
    segunda = parseInt (segunda);

    multiplicar = (primera * segunda);
  
    alert("la multiplicación es " + resultado);
}

function dividir()
{
	var primera = document.getElementById ("numeroUno").value;
    var segunda = document.getElementById ("numeroDos").value;
    var resultado;
 

    primera = parseInt (primera);
    segunda = parseInt (segunda);

    resultado = (primera / segunda);
  
    alert("la división es " + resultado);
}

