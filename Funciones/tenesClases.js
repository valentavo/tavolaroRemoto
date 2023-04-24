function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
        case "miercoles":
        case "viernes":                
            console.log("tenés clases")
            break;  
        default: 
            console.log("no tenes clases")
            break;
	}
}

tengoClases("lunes")