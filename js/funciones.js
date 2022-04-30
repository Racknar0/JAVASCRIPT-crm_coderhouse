export function construccion() {
    Swal.fire('En Construcción');
}

// Valida que no haya campos vacios
export function validarVacios(arr) {
    return arr.includes('') ? true : false;
}

export function mostrarError(error) { //si hay un error
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1500
      })
}



export function mostrarSuccess(form) { //si se ingreso correctamente
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<p class="text-success">Usuario Añadido a la base de datos con exito!</p>',
        showConfirmButton: false,
        timer: 2000,
    });
    form.reset();
}