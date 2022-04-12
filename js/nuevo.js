const cantidad = parseInt(prompt('Ingrese la cantidad de usuarios a registrar', 0));
const usuarios = [];

while (isNaN(cantidad) || cantidad < 1) {
    alert('Ingrese un valor Numérico Valido');
    cantidad = parseInt(
        prompt('Ingrese la cantidad de usuarios a registrar', 0)
    );
}

for (let index = 0; index < cantidad; index++) {
    const usuario = preguntar();
    usuarios.push(usuario);
}

function preguntar() {
    const usuario = {};

    usuario.name = prompt('Ingrese el nombre del usuario', '').toLowerCase();
    usuario.lastName = prompt('Ingrese el apellido del usuario', '').toLowerCase();

    //!Verificar que el telefono sea valido1
    usuario.phoneNumber = parseInt(prompt('Ingrese el telefono del usuario', 0));
    while (isNaN(usuario.phoneNumber) || usuario.phoneNumber < 1 || usuario.phoneNumber.toString().length !== 10) {
        alert('Ingrese un valor Numérico Valido y con una extension nacional de 10 digitos');
        usuario.phoneNumber = parseInt(prompt('Ingrese el telefono del usuario', 0));
    }

    usuario.email = prompt('Ingrese el correo del usuario', '').toLowerCase();
    usuario.brand = prompt('Ingrese la marca del equipo', '').toLowerCase();
    usuario.model = prompt('Ingrese el modelo del equipo', '').toLowerCase(); 

    //!Validar Cantidad de Fallos
    const arrFallos = cantidadFallos();
    usuario.fallos = arrFallos
    usuario.diagnostic = prompt('Ingrese el diagnostico del equipo', '').toLowerCase(); 


    return usuario;
}


function cantidadFallos() {
    const arrFallos = [];
    let cantidadFallos;
    cantidadFallos = parseInt(prompt('Ingrese la cantidad de fallos detectados', 0));
    while (isNaN(cantidadFallos) || cantidadFallos < 1) {
        alert('Ingrese un valor Numérico Valido > 1');
        cantidadFallos = parseInt(prompt('Ingrese la cantidad de fallos detectados', 0));
    }
    for (let index = 0; index < cantidadFallos; index++) {
        arrFallos[index] = prompt(`Ingrese el ${index + 1} fallo`,'').toLowerCase();
    }

    return arrFallos;
}

console.log(usuarios);