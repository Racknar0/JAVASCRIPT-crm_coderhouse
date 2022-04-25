export function construccion() {
    Swal.fire('En Construcción');
}

// Valida que no haya campos vacios
export function validarVacios(arr) {
    return arr.includes('') ? true : false;
}

export function mostrarError(mensaje, error) { //si hay un error
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
