const inicializarValidacionContacto = () => {
    const formulario = document.getElementById('formulario-contacto');
    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {
        if (!formulario.checkValidity()) {
            evento.preventDefault();
            evento.stopPropagation();
        }
        formulario.classList.add('was-validated');
    });
};

document.addEventListener('DOMContentLoaded', inicializarValidacionContacto);
