const resaltarEnlaceActivo = () => {
    const pagina = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#navbar-principal .nav-link').forEach((enlace) => {
        const esActual = enlace.getAttribute('href') === pagina;
        enlace.classList.toggle('active', esActual);
        if (esActual) {
            enlace.setAttribute('aria-current', 'page');
        } else {
            enlace.removeAttribute('aria-current');
        }
    });
};

document.addEventListener('DOMContentLoaded', resaltarEnlaceActivo);
