// Variables
const listado = document.querySelector('#listado');

usuariosLS = localStorage.getItem('usuarios');
if(usuariosLS === null || usuariosLS === undefined){ 
    noHayUsuarios('No hay usuarios registrados');
} else {
    usuarios = JSON.parse(usuariosLS);
    mostrarUsuarios(usuarios);
}



// Funciones
function noHayUsuarios(mensaje){
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000,
    });
}

function mostrarUsuarios(usuarios){
    console.log(usuarios);

    usuarios.forEach(usuario => {
        const contenedorUser = document.createElement('div');
        contenedorUser.classList.add('contenedor-user');

        const nombre = document.createElement('p');
        nombre.textContent = `Nombre: ${usuario.name}`;
        const apellido = document.createElement('p');
        apellido.textContent = `Apellido: ${usuario.apellido}`;
        const telefono = document.createElement('p');
        telefono.textContent = `Telefono: ${usuario.telefono}`;
        const correo = document.createElement('p');
        correo.textContent = `Correo: ${usuario.email}`;
        const fecha = document.createElement('p');
        fecha.textContent = `Fecha: ${usuario.fecha}`;
        const marca = document.createElement('p');
        marca.textContent = `Marca: ${usuario.marca}`;
        const modelo = document.createElement('p');
        modelo.textContent = `Modelo: ${usuario.modelo}`;
        const fallos = document.createElement('p');
        fallos.textContent = `Fallos: ${usuario.fallos}`;
        const diagnostico = document.createElement('p');
        diagnostico.textContent = `Diagnostico: ${usuario.diagnostico}`;


        contenedorUser.appendChild(nombre);
        contenedorUser.appendChild(apellido);
        contenedorUser.appendChild(telefono);
        contenedorUser.appendChild(correo);
        contenedorUser.appendChild(fecha);
        contenedorUser.appendChild(marca);
        contenedorUser.appendChild(modelo);
        contenedorUser.appendChild(fallos);
        contenedorUser.appendChild(diagnostico);

        listado.appendChild(contenedorUser);
    });

}