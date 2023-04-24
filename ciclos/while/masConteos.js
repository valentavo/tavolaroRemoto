function saldosDeMesesConGanancia(unPeriodo){

    let mesesConGanancia = []
    for (let i = 0; i < unPeriodo.length; i++){

       if (unPeriodo[i] < 0){
   
           mesesConGanancia.push(unPeriodo[i])
       }
    }
   
   
   
       return mesesConGanancia
   }

   console.log(saldosDeMesesConGanancia([3,4,5,-4,-4]))