function precioAuto(tipoDeVehiculo, diasDeAlquiler, silla) {
    let valorVehiculo;
    switch (tipoDeVehiculo) {
        case "compacto":
            valorVehiculo = 14000;
            break;
        case "mediano":
            valorVehiculo = 17000;
            break;
        case "camioneta":
            valorVehiculo = 28000;
            break;
    
        default:
            break;
    }

    let totalAPagar = valorVehiculo * diasDeAlquiler
    if (silla == true) {
        return ("Estimado cliente: en base al tipo de vehiculo " + tipoDeVehiculo + " alquilado, considerando los " + diasDeAlquiler + " dias utilizados, el monto total a pagar es de " + totalAPagar + ". Adicionalmente, solicito una silla para bebe, por lo que se suma un total de $1200 extra")
    } else {
        (silla == false)
        return ("Estimado cliente: en base al tipo de vehiculo " + tipoDeVehiculo + " alquilado, considerando los " + diasDeAlquiler + " dias utilizados, el monto total a pagar es de " + totalAPagar)
    }
}

console.log(precioAuto("compacto", 5, false))
