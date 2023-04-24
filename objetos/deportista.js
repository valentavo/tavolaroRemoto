let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras : function(cantidadDeHoras){
        this.energia = this.energia - (cantidadDeHoras * 5)
        this.experiencia = this.experiencia + (cantidadDeHoras * 2)
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(10);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);  
console.log("Deportista experiencia: "+deportista.experiencia);