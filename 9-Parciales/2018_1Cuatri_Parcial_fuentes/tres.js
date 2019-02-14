function mostrar()
{ 
    var precio
    var porcentaje
   

    precio = prompt("precio")
    porcentaje = prompt ("porcentaje de descuento")
    
    document.getElementById("elPrecioFinal").value = precio - (precio*porcentaje/100); 

     

}
