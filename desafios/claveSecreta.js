function laClaveSecreta(conjuntoDeCaracteres){
    let mensaje;
    conjuntoDeCaracteres.reverse()
  
    for(let i = 0; i <= conjuntoDeCaracteres.length; i ++){
      if(conjuntoDeCaracteres[i] == "*"){
        conjuntoDeCaracteres.splice(i, 1)
      }
    }
    mensaje = conjuntoDeCaracteres.join("")
    return mensaje
  }
  console.log(laClaveSe0creta([ "s", "*", "e", "n", "u", "l", " ", "s", "", "e", " ", "a", "í", "*", "d", " ", "l", "", "E", "*"]))