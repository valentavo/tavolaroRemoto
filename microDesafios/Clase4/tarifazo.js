let pagoMes = 5000
let consumoKWH = 310

let consumoTotal = consumoKWH > 300 ? ("Debido a que su hogar tuvo un consumo de, " + consumoKWH + " en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendran un aumento del 20%), cumpli con con informarle que se ha ajustado el total a pagar, que sera de $") + (((pagoMes*20)/100) + pagoMes) : "No contempla ningun aumento"

console.log(consumoTotal)
