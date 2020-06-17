formatoNumeros = function(numero)
{
 return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")   
}



