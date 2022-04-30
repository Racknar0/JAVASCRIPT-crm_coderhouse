import {construccion, validarVacios, mostrarError, mostrarSuccess} from './funciones.js';

// Variables
const form = document.querySelector('#form');
const divError = document.querySelector('#divError');
let usuarios = [];

/* const usuariosLSC = localStorage.getItem('usuarios');
console.log(usuariosLSC); */

//evento dom content loaded
document.addEventListener('DOMContentLoaded', domCargado);

//Funciones
function domCargado() {
    form.addEventListener('submit', validar);
}

function validar(e) { //Funcion ppal del Form
    e.preventDefault(); // evita que se recargue la pagina

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const telefono = document.querySelector('#telefono').value;
    const correo = document.querySelector('#correo').value;
    const fecha = document.querySelector('#fecha').value;
    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const fallos = document.querySelector('#fallos').value;
    const diagnostico = document.querySelector('#diagnostico').value;
    const error = document.querySelector('.error');

    // si hay campos vacios en el array lanza la function mostrarError
    if (validarVacios([nombre,apellido,telefono,correo,fecha,marca,modelo,fallos,diagnostico,])) {
        return mostrarError('<p class="text-danger">Todos los campos son obligatorios!</p>')
    } 

    // formatea el arrFallos
    const arrFallos = fallos
        .split(',')
        .map((elem) => elem.toLowerCase().trim());

    const usuario = {
        name: nombre,
        apellido: apellido,
        telefono: telefono,
        email: correo,
        fecha: fecha,
        marca: marca,
        modelo: modelo,
        fallos: arrFallos,
        diagnostico: diagnostico,
        id: generarID(),
    };

    mostrarSuccess(form);
    sumarUsuarios(usuario);
}

function generarID(){
    return new Date().getTime();
}
/* 
mostrarSuccess(form) //si se ingreso correctamente
 */
function sumarUsuarios(usuario) {
    usuarios = [usuario, ...usuarios];

    console.log(usuario);
    asignarAlLocalStorage(usuarios, usuario);
}

function asignarAlLocalStorage(usuarios, usuario) {
    if(localStorage.getItem('usuarios') === null || localStorage.getItem('usuarios') === undefined){ //si no existe el localStorage
        console.log('No existe el localStorage');
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    } else {
        let usuariosLS = JSON.parse(localStorage.getItem('usuarios')); //si existe el localStorage
        let nuevosUsuarios = [...usuariosLS, usuario];
       
        localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios));
    }
}

