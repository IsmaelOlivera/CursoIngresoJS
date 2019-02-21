function mostrar()
{
    var importe;
    var cantidad;
    var tarjeta; 
    var calculo;
    var calculo1;
    var calculo2;
    var calculo3;

    importe = parseInt(prompt("Ingrese el valor"));
    cantidad = parseInt(prompt("Ingrese la cantidad"));
    tarjeta = confirm("Paga con tarjeta");
    
    if (cantidad > 2 && (importe < 2000))
    {
         calculo = importe * (1 - 10 / 100);
         calculo3 = importe * cantidad; 
    }
        
    if (importe > 2000)
    {
        calculo1 = importe * (1 - 15 / 100);
        calculo3 = importe * cantidad;
    }
    
    if (tarjeta)
    {
        calculo2 = importe * (1 + 10 / 100);
        calculo3 = importe * cantidad
    }
        
    alert("El valor total es de " + calculo3 + " la cantidad que compro es " + cantidad + "el descuento con tarjeta" + calculo2 );
}   
