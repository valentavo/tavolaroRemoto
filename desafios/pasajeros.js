function reporteDePasajeros(estacionesAvanzadas){
  let pasajeros = 200;
  let arrayDeInformes = [];
  for (let i = 0; i <= estacionesAvanzadas; i++){
    switch (i) {
      case 0:
        arrayDeInformes.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        break;
      case 5:
        pasajeros = pasajeros + 120 - 80;
        arrayDeInformes.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        break;
      default:
        pasajeros = pasajeros + 50 -30;
        arrayDeInformes.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
    }
  }
  return arrayDeInformes
}

console.log(reporteDePasajeros(6))