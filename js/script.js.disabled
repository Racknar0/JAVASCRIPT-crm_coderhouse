'use strict';

//Declaración de Variables
const usuario = {};
const arrFallos = [];

//Declaración de Funciones
function preguntar(pregunta, keyObj) {
    let dato;
    let conversion;
    do {
        dato = prompt(`ingrese ${pregunta}`).toLowerCase();
    } while (dato === '');

    /* validacion phone numer NaN */
    if (keyObj === 'phoneNumber') {
        conversion = parseInt(dato);
        while (isNaN(conversion) || conversion < 1) {
            alert('Ingrese un valor Numérico Valido');
            conversion = parseInt(prompt(`ingrese ${pregunta}`));
        }
        usuario[keyObj] = conversion;
        return;
    }

    usuario[keyObj] = dato;
}


//Funcion para agregar un array con los fallos detectados
function fallos (arrFallos, pregunt) {
    let cantFallos
    do {
        cantFallos = parseInt(prompt(`Por favor ingrese ${pregunt}`, 0))
    } while (isNaN(cantFallos));
    for (let i = 0; i < cantFallos; i++) {
        arrFallos[i] = prompt(`Ingrese el ${i + 1} fallo`, '').toLowerCase();
    }
    usuario.fallos = arrFallos;
}

7
//Llamado de funciones
preguntar('el nombre del usuario', 'name');
preguntar('el apellido del usuario', 'lastName');
preguntar('el telefono del usuario', 'phoneNumber');
preguntar('el correo del usuario', 'email');
preguntar('la marca del equipo', 'brand');
preguntar('el modelo del equipo', 'model'); 
fallos(arrFallos , 'la cantidad de fallos detectados')
preguntar('el diagnostico del equipo', 'diagnostic');

console.log(arrFallos);
console.log(usuario);

document.write(`<br>${usuario.name}<br>`)
document.write(`<br>${usuario.lastName}<br>`)
document.write(`<br>${usuario.phoneNumber}<br>`)
document.write(`<br>${usuario.email}<br>`)
document.write(`<br>${usuario.brand}<br>`)
document.write(`<br>${usuario.model}<br>`)
document.write(`<br>${usuario.diagnostic}<br>`)


