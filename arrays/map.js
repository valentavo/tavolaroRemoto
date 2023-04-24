let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(horarios){
    return horarios - 1;
});

console.log(horariosAtrasados);