const HTML_ENCABEZADO = `
    <header>
        <nav id="navbar-principal" class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" aria-label="Navegación principal">
            <div class="container">
                <a class="navbar-brand" href="../inicio/index.html" title="Ir a la página principal">
                    Mundo Foca
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Mostrar/ocultar navegación">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="../inicio/index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="../nosotros/nosotros.html">Nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="../galeria/galeria.html">Galería</a></li>
                        <li class="nav-item"><a class="nav-link" href="../blog/blog.html">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
`;

const HTML_PIE = `
    <footer id="pie-pagina" class="bg-dark text-white">
        <div class="container py-5 text-center">
            <p class="fs-4 fw-semibold mb-4">Mundo Foca</p>
            <p class="mb-0 text-white-50">&copy; 2026 Mundo Foca. Trabajo colaborativo de equipo.</p>
        </div>
    </footer>
`;

class EncabezadoSitio extends HTMLElement {
    connectedCallback() {
        this.innerHTML = HTML_ENCABEZADO;
    }
}

class PieSitio extends HTMLElement {
    connectedCallback() {
        this.innerHTML = HTML_PIE;
    }
}

customElements.define('gdps-header', EncabezadoSitio);
customElements.define('gdps-footer', PieSitio);
