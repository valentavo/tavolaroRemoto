let perfil = "juana"

if (perfil == ""){
    console.log("Debe especificar el perfil del usuario")
}else if (perfil == "Administrador" || perfil == "ADMINISTRADOR" || perfil == "administrador" ){
console.log("Usted tiene todos los privilegios")
}else if (perfil == "Asistente" || perfil == "ASISTENTE" || perfil == "asistente" ){
    console.log("Usted solo tiene permisos de registrar, modificar y consultar datos")
}else if (perfil == "Invitado" || perfil == "INVITADO" || perfil == "invitado" ){
    console.log("Usted solo tiene permisos de consultar datos")
}else{
    console.log("Debe especificar un perfil valido")
}
