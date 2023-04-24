function asientosDisponibles(conjuntoDeAsientos, asientoOcupar){
    if (conjuntoDeAsientos.indexOf(asientoOcupar) != -1){
        return ("Felicitaciones, el asiento número " + asientoOcupar + " está disponible")
    } else {
        return ("Lo sentimos, el asiento número " + asientoOcupar + " está ocupado, pero aún quedan " + conjuntoDeAsientos.length + " asientos disponibles")
    }
    
}

console.log(asientosDisponibles([1,2,3,4,5,7,9,10], 8))