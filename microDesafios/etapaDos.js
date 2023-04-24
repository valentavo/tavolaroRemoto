let autosImportados = require("./codear")
let concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patente){
      let patenteBuscada = this.autos.find(auto => auto.patente
         == patente)
       if(patenteBuscada) return patenteBuscada
       else return null
   },
   venderAuto : function(patente){
      let patenteBuscada = this.buscarAuto(patente)
      if(patenteBuscada == null) return "Auto no encontrado"
      else patenteBuscada.vendido = true

   }, 
   autosParaLaVenta : function(){
      let autosALaVenta = this.autos.filter(row => row.vendido == false)
      return autosALaVenta
      },
    autosNuevos: function() {
         return this.autosParaLaVenta().filter(function(auto) {
           return auto.km < 100;
         })
         }

          
        
   
}


concesionaria.autosNuevos()

console.log(concesionaria.autosNuevos())
