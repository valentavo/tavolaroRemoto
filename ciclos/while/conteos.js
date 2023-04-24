function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;

  for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo > 0){
          cantidad += 1
        }
    }
  
  return cantidad;
}
console.log(cantidadDeMesesConGanancia([1,1,1,-1,-1]))