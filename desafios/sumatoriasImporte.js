function sumatoriaBajoImporte(ganancias){
    let resultadoFinal = 0
    for (let i = 0; i < ganancias.length; i++){
    if (ganancias[i] > 0 && ganancias[i] <= 1000){
        resultadoFinal = resultadoFinal + ganancias[i]
     
    }
}
    return resultadoFinal
}

console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]))