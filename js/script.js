const divResultado = document.getElementById('resultado');
/************** ( 'DECLARACION DE VARIABLES' ) **************/

let cantidad;
const usuarios = [];
let filtro;

/************** ( 'DECLARACION DE LAS FUNCIONES' ) **************/

function preguntar() {
    const usuario = {};

    usuario.name = preguntaAlUser('el nombre del usuario').toLowerCase();
    usuario.lastName = preguntaAlUser('el apellido del usuario').toLowerCase();
     
    //!Verificar que el telefono sea valido1
    usuario.phoneNumber = parseInt(preguntaAlUser('el telefono del usuario'));
    while (isNaN(usuario.phoneNumber) || usuario.phoneNumber < 1 || usuario.phoneNumber.toString().length !== 10) {
        alert('Ingrese un valor Numérico Valido y con una extension nacional de 10 digitos');
        usuario.phoneNumber = parseInt(preguntaAlUser('el telefono del usuario'));
    }

    usuario.email = preguntaAlUser('Ingrese el correo del usuario').toLowerCase();
    usuario.brand = preguntaAlUser('Ingrese la marca del equipo').toLowerCase();
    usuario.model = preguntaAlUser('Ingrese el modelo del equipo').toLowerCase(); 

    //!Validar Cantidad de Fallos
    const arrFallos = cantidadFallos();
    usuario.fallos = arrFallos 

    usuario.diagnostic = preguntaAlUser('Ingrese el diagnostico del equipo', '').toLowerCase();  

    return usuario;
}

function cantidadFallos() {
    const arrFallos = [];
    let cantidadFallos;
    cantidadFallos = parseInt(
        prompt('Ingrese la cantidad de fallos detectados', 0)
    );
    while (isNaN(cantidadFallos) || cantidadFallos < 1) {
        alert('Ingrese un valor Numérico Valido > 1');
        cantidadFallos = parseInt(
            prompt('Ingrese la cantidad de fallos detectados', 0)
        );
    }
    for (let index = 0; index < cantidadFallos; index++) {
        arrFallos[index] = prompt(
            `Ingrese el ${index + 1} fallo`,
            ''
        ).toLowerCase();
    }

    return arrFallos;
}

function preguntaAlUser(a) {
    let dato;
    dato = prompt(`Ingrese ${a}`, '');
    while (dato === '' || dato === null) {
        dato = prompt(`Ingrese ${a}`, '');
    }

    return dato;
}

function filtroCantidadUsuarios(usuarios) {
    alert('La cantidad de usuarios ingresados son: ' + usuarios.length);
}

function filtroRecorrerArray(usuarios) {
    let i = 1;
    usuarios.forEach((element) => {
        alert(`
        DATOS DEL USUARIO ${i++}
        El nombre es: ${element.name}
        El apellido es: ${element.lastName}
        El telefono es: ${element.phoneNumber}
        El correo es: ${element.email}
        La marca es: ${element.brand}
        El modelo es: ${element.model}
        La cantidad de fallos es: ${element.fallos.length}
        El diagnostico es: ${element.diagnostic}
        `);
    });
}

function filtroBuscarUsuario(usuarios, cantidad) {
    const busqueda = preguntaAlUser(
        'Ingrese el nombre del usuario a buscar'
    ).toLowerCase();

    for (let index = 0; index < cantidad; index++) {
        if (usuarios[index].name === busqueda) {
            alert('El usuario SI se encuentra');
            return;
        }
    }

    alert('El usuario no existe');
}

/************** ( 'CUERPO DEL CODIGO' ) **************/

cantidad = parseInt(prompt('Ingrese la cantidad de usuarios a registrar', 0));

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

/* filtro = parseInt(prompt('Ingrese la opcion que desea realizar: \n 1. Cantidad de usuarios \n 2. Recorrer los usuarios \n 3. Buscar usuario por nombre', 1)); */

switch (filtro) {
    case 1:
        //Aplicacion de .length
        filtroCantidadUsuarios(usuarios);
        break;
    case 2:
        //Aplicacion de ForEach
        filtroRecorrerArray(usuarios);
        break;
    case 3:
        //Aplicacion de Busqueda por nombre
        filtroBuscarUsuario(usuarios);
        break;

    default:
        break;
}

console.log(usuarios);

/************** ( 'DOM SCRIPTING' ) **************/
divResultadoTitulo = document.createElement('h1');
divResultadoTitulo.textContent = `Cantidad de usuarios registrados: ${usuarios.length}`;
divResultado.appendChild(divResultadoTitulo);

for (let i = 0; i < usuarios.length; i++) {

    const divNumeroDelUsuario = document.createElement('h2');
    divNumeroDelUsuario.textContent = `Usuario Numero ${i + 1}`;
    divResultado.appendChild(divNumeroDelUsuario);

    const divUsuarioNombre = document.createElement('p');
    divUsuarioNombre.textContent = `Nombre: ${usuarios[i].name}`;
    divResultado.appendChild(divUsuarioNombre);

    const divUsuarioApellido = document.createElement('p');
    divUsuarioApellido.textContent = `Apellido: ${usuarios[i].lastName}`;
    divResultado.appendChild(divUsuarioApellido);

    const divUsuarioTelefono = document.createElement('p');
    divUsuarioTelefono.textContent = `Telefono: ${usuarios[i].phoneNumber}`;
    divResultado.appendChild(divUsuarioTelefono);

    const divUsuarioCorreo = document.createElement('p');
    divUsuarioCorreo.textContent = `Correo: ${usuarios[i].email}`;
    divResultado.appendChild(divUsuarioCorreo);

    const divUsuarioMarca = document.createElement('p');
    divUsuarioMarca.textContent = `Marca: ${usuarios[i].brand}`;
    divResultado.appendChild(divUsuarioMarca);

    const divUsuarioModelo = document.createElement('p');
    divUsuarioModelo.textContent = `Modelo: ${usuarios[i].model}`;
    divResultado.appendChild(divUsuarioModelo); 

    const divUsuarioFallos = document.createElement('p');
    divUsuarioFallos.textContent = `Cantidad de fallos: ${usuarios[i].fallos.length}`;
    divResultado.appendChild(divUsuarioFallos);

    const divUsuarioDiagnostico = document.createElement('p');
    divUsuarioDiagnostico.textContent = `Diagnostico: ${usuarios[i].diagnostic}`;
    divResultado.appendChild(divUsuarioDiagnostico);

    const divUsuarioFecha = document.createElement('p');
    divUsuarioFecha.textContent = `Fecha:AUN NO CREADA`;
    divResultado.appendChild(divUsuarioFecha);
}
