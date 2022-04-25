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
    i = 0;

    usuarios.forEach(usuario => {
        const contenedorUser = document.createElement('div');
        contenedorUser.classList.add('contenedor-user');

        const titulo = document.createElement('h3');
        titulo.innerHTML = `${++i} Usuario  <hr>`;
        titulo.classList.add('text-center', 'mb-3');

        const nombre = document.createElement('p');
        nombre.innerHTML = `<span class="fw-bold">Nombre:</span> ${usuario.name} <hr>`;
        const apellido = document.createElement('p');
        apellido.innerHTML = `<span class="fw-bold">Apellido:</span>: ${usuario.apellido} <hr>`;
        const telefono = document.createElement('p');
        telefono.innerHTML = `<span class="fw-bold">Teléfono:</span>: ${usuario.telefono} <hr>`;
        const correo = document.createElement('p');
        correo.innerHTML = `<span class="fw-bold">Correo:</span>: ${usuario.email} <hr>`;
        const fecha = document.createElement('p');
        fecha.innerHTML = `<span class="fw-bold">Fecha:</span>: ${usuario.fecha} <hr>`;
        const marca = document.createElement('p');
        marca.innerHTML = `<span class="fw-bold">Marca:</span>: ${usuario.marca} <hr>`;
        const modelo = document.createElement('p');
        modelo.innerHTML = `<span class="fw-bold">Modelo:</span>: ${usuario.modelo} <hr>`;
        const fallos = document.createElement('p');
        fallos.innerHTML = `<span class="fw-bold">Fallos:</span>: ${usuario.fallos} <hr>`;
        const diagnostico = document.createElement('p');
        diagnostico.innerHTML = `<span class="fw-bold">Diagnostico:</span>: ${usuario.diagnostico} <hr>`;

        const divBotones = document.createElement('div');
        divBotones.classList.add('d-flex', 'justify-content-between')
        // Botones
        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn', 'btn-primary', 'fs-5', 'fw-bold');
        btnEditar.style.width = '80px';
        btnEditar.innerHTML = 'Editar';
        btnEditar.addEventListener('click', editar)

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger', 'fs-5', 'fw-bold');
        btnEliminar.style.width = '80px';
        btnEliminar.innerHTML = 'Editar';
        btnEliminar.addEventListener('click', eliminar)

        divBotones.appendChild(btnEditar);
        divBotones.appendChild(btnEliminar);        
    
        contenedorUser.appendChild(titulo);
        contenedorUser.appendChild(nombre);
        contenedorUser.appendChild(apellido);
        contenedorUser.appendChild(telefono);
        contenedorUser.appendChild(correo);
        contenedorUser.appendChild(fecha);
        contenedorUser.appendChild(marca);
        contenedorUser.appendChild(modelo);
        contenedorUser.appendChild(fallos);
        contenedorUser.appendChild(diagnostico);
        contenedorUser.appendChild(divBotones);
        

        listado.appendChild(contenedorUser);
    });

}

function editar () {
    Swal.fire('En Construcción')
}

function eliminar () {
    Swal.fire('En Construcción')
}