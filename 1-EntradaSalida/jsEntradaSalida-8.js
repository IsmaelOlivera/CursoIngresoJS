/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var ope1 = parseInt(document.getElementById("numeroDividendo").value);
    var ope2 = parseInt(document.getElementById("numeroDividendo").value);
    var resultado;

    resultado = ope1 % ope2;
    
    alert("El resto es " + resultado);
}
