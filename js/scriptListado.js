import {construccion, validarVacios, mostrarError} from './funciones.js';

// Variables
const listado = document.querySelector('#listado');


let usuariosLS = localStorage.getItem('usuarios');
if (usuariosLS === null || usuariosLS === undefined || usuariosLS === '' || usuariosLS === '[]') {
    noHayUsuarios('No hay usuarios registrados');
} else {
    let usuarios = JSON.parse(usuariosLS);
    mostrarUsuarios(usuarios);
}

fetch('https://picsum.photos/v2/list?page=2&limit=10')
.then(res => res.json())
.then(res => {
    bgBody(res);
})
.catch(err => console.log(err));
        

const bgBody = (res) => {
    let body = document.querySelector('body');
    body.style.backgroundImage = `url(${res[random(1, res.length - 1)].download_url}?grayscale&blur=2)`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
}


// Funciones
function noHayUsuarios(mensaje) {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000,
    });
}

// Mostrar Usuarios en el DOM
function mostrarUsuarios(usuarios) {
    
    let i = 0;

    // Recorrer el array de usuarios
    usuarios.forEach((usuario) => {
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
        divBotones.classList.add('d-flex', 'justify-content-between');
        // Botones
        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn', 'bg-indigo', 'fs-5', 'fw-bold', 'text-white');
        btnEditar.style.width = '80px';
        btnEditar.innerHTML = 'Editar';
        btnEditar.setAttribute('data-target', `#editar${i}`);
        btnEditar.setAttribute('data-toggle', 'modal');

        // divModal
        const divModalEdit = document.createElement('div');
        divModalEdit.innerHTML = `
        <div class="modal fade" id="editar${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editando Usuario #${i}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex justify-content-center">
                
                    <form autocomplete="on" id="form${i}" class="formularioIngreso bg-light p-5 shadow-lg">
                            <div class="form-group">
                            <label class="editando" for="nombre">Nombres</label>
                            <input value='${usuario.name}' type="text" class="form-control" id="nombre${i}" aria-describedby="userName" placeholder="Nombre del usuario">
                            </div>
                            <div class="form-group">
                            <label class="editando" for="apellido">Apellidos</label>
                            <input value='${usuario.apellido}' type="text" class="form-control" id="apellido${i}" aria-describedby="lastName" placeholder="Apellido del usuario">
                            </div>
                            <div class="form-group">
                            <label class="editando" for="telefono">Telefono</label>
                            <input value='${usuario.telefono}' type="number" class="form-control" id="telefono${i}" placeholder="Numero de telefono del usuario">
                            </div>
                            <div class="form-group">
                            <label class="editando" for="correo">Email</label>
                            <input value='${usuario.email}' type="email" class="form-control" id="correo${i}" placeholder="Correo del usuario">
                            </div>
                            <div class="form-group">
                            <label class="editando" for="correo">Fecha Ingreso</label>
                            <input value='${usuario.fecha}' type="date" class="form-control" id="fecha${i}" placeholder="Fecha de ingreso del equipo">
                            </div>
                            <div class="form-group">
                                <label class="editando" for="marca">Marca del Celular</label>
                                <select id="marca${i}" class="form-select" aria-label="Default select example">
                                    <option value="samsung">Samsung</option>
                                    <option value="iphone">Iphone</option>
                                    <option value="xaomi">Xaomi</option>
                                    <option value="huawei">Huawei</option>
                                    <option value="motororola">Motorola</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="editando" for="modelo">Modelo del Celular</label>
                                <input value='${usuario.modelo}' type="text" class="form-control" id="modelo${i}" aria-describedby="Model" placeholder="Ingresa el Modelo del Equipo">
                            </div>
                            <div class="form-group">
                                <label class="editando" for="fallos">Fallos del Celular</label>
                                <textarea class="form-control" id="fallos${i}" rows="3" placeholder="escribe los fallos separados por coma">${usuario.fallos}</textarea>
                            </div>
                            <div class="form-group">
                                <label class="editando" for="diagnostico">Diagnostico del Final</label>
                                <select id="diagnostico${i}" class="form-select" aria-label="Default select example">
                                <option value="Fuera de Garantia">Fuera de Garantía</option>
                                <option value="Ingresa a Laboratorio">Cubre Garantía</option>
                                <option value="No Reproduce Fallo">No Reproduce Fallo 'Devuelto al cliente'</option>
                                </select>
                            </div>
                            <button id="submitEditar-${i}" type="submit" class="btn bg-indigo text-white w-100 mt-4 mb-2">Editar en sistema</button>
                            <button type="button" class="btn btn-secondary w-100" data-dismiss="modal">Cancelar Cambios</button>
                            <div id="divError"></div>
                        </form>

              </div>
              
            </div>
          </div>
        </div>
        `;

        // Boton Eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger', 'fs-5', 'fw-bold', 'redondeado');
        btnEliminar.style.width = '80px';
        btnEliminar.innerHTML = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            eliminarUsuario(usuario.id)
        });

        divBotones.appendChild(btnEditar);
        divBotones.appendChild(btnEliminar);

        // Agregar los elementos al DOM
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
        contenedorUser.appendChild(divModalEdit);

        listado.appendChild(contenedorUser);

        const form = document.getElementById(`form${i}`);
        const nuevoName = document.getElementById(`nombre${i}`);
        const nuevoApellido = document.getElementById(`apellido${i}`);
        const nuevoTelefono = document.getElementById(`telefono${i}`);
        const nuevoCorreo = document.getElementById(`correo${i}`);
        const nuevoFecha = document.getElementById(`fecha${i}`);
        const nuevaMarca = document.getElementById(`marca${i}`);
        const nuevoModelo = document.getElementById(`modelo${i}`);
        const nuevoFallos = document.getElementById(`fallos${i}`);
        const nuevoDiagnostico = document.getElementById(`diagnostico${i}`);

        

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validarVacios([nuevoName.value, nuevoApellido.value, nuevoTelefono.value, nuevoCorreo.value, nuevoFecha.value, nuevaMarca.value, nuevoModelo.value, nuevoFallos.value, nuevoDiagnostico.value])) {
                return mostrarError('<p class="text-danger">Todos los campos son obligatorios!!</p>');
            }

            const arrFallos = nuevoFallos.value
            .split(',')
            .map((elem) => elem.toLowerCase().trim());
            
            const usuarioNuevo = {
                name: nuevoName.value,
                apellido: nuevoApellido.value,
                telefono: nuevoTelefono.value,
                email: nuevoCorreo.value,
                fecha: nuevoFecha.value,
                marca: nuevaMarca.value,
                modelo: nuevoModelo.value,
                fallos: arrFallos,
                diagnostico: nuevoDiagnostico.value,
                id: usuario.id,
            };

            
            addUserArray(usuarios ,usuarioNuevo);

        });

    
        
        
    });
}

function eliminarUsuario(id) {
    let usuarios = JSON.parse(usuariosLS);
    const usuariosFilter = usuarios.filter((usuario) => usuario.id !== id);
    console.log(usuariosFilter);
    localStorage.setItem('usuarios', JSON.stringify(usuariosFilter))

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario eliminado con exito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        window.location.reload();
     }, 1500);
}



function addUserArray (usuarios, usuarioNuevo) {

    let nuevosUsuarios = usuarios.filter(usuario => usuario.id !== usuarioNuevo.id);
    nuevosUsuarios = [usuarioNuevo, ...nuevosUsuarios];

    asignarUserNewLS(nuevosUsuarios);
}


function asignarUserNewLS(usuarios){
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario modificado con exito!',
        showConfirmButton: false,
        timer: 1500
      })

     setTimeout(() => {
        window.location.reload();
     }, 1500);
    
};

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


tippy(btnLinkIngreso, {
    content: "Ingresa tus equipos aqui",
  });

tippy(btnLinkListado, {
    content: "Cuantos equipos se han ingresado?",
  });