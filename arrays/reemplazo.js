function reemplazoFastFast (textoA, palabraAReemplazar, palabraReemplazo){

    texto = textoA + palabraAReemplazar
    return texto.replace(palabraAReemplazar , palabraReemplazo)
 
 }
 
 console.log(reemplazoFastFast("sos muy ", "bueno", "horrible" ))