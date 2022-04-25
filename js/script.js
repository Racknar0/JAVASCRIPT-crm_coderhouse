// Variables
const form = document.querySelector('#form');
const divError = document.querySelector('#divError');
let usuarios = [];

//evento dom content loaded
document.addEventListener('DOMContentLoaded', domCargado);

//Funciones
function domCargado() {
    form.addEventListener('submit', validar);
}

function validar(e) { //Funcion ppal del Form
    e.preventDefault();

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

    if (
        validarVacios([
            nombre,
            apellido,
            telefono,
            correo,
            fecha,
            marca,
            modelo,
            fallos,
            diagnostico,
        ])
    ) {
        return mostrarError(
            '<p class="text-danger">Todos los campos son obligatorios!</p>'
        );
    }

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
    };

    mostrarSuccess(form);
    sumarUsuarios(usuario);
}

function validarVacios(arr) { //validar que no haya campos vacios
    return arr.includes('') ? true : false;
}

function mostrarError(mensaje, error) { //si hay un error
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: 'Esta alerta se cerrará en <b></b> milisegundos.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            /*  console.log('I was closed by the timer'); */
        }
    });
}

function mostrarSuccess(form) { //si se ingreso correctamente
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<p class="text-success">Usuario Añadido a la base de datos con exito!</p>',
        showConfirmButton: false,
        timer: 2000,
    });
    form.reset();
}

function sumarUsuarios(usuario) {
    usuarios = [usuario, ...usuarios];
    asignarAlLocalStorage(usuarios);
}

function asignarAlLocalStorage(usuarios) {
    if(localStorage.getItem('usuarios') === null || localStorage.getItem('usuarios') === undefined){ //si no existe el localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    } else {
        let usuariosLS = JSON.parse(localStorage.getItem('usuarios')); //si existe el localStorage
        usuariosLS = [...usuarios, ...usuariosLS];
        console.log(usuariosLS);
        localStorage.setItem('usuarios', JSON.stringify(usuariosLS));
    }
}
