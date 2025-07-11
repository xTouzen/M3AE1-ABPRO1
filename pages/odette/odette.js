// main.js (o un archivo JS dedicado a la navegación)

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarLinks = document.querySelector('.navbar__links');

    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', () => {
            // Alterna la clase 'active' en el botón de hamburguesa para animarlo
            navbarToggle.classList.toggle('active');
            // Alterna la clase 'active' en los enlaces para mostrarlos/ocultarlos
            navbarLinks.classList.toggle('active');
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace (para SPA o páginas con anclas)
        navbarLinks.querySelectorAll('.navbar__link').forEach(link => {
            link.addEventListener('click', () => {
                navbarToggle.classList.remove('active');
                navbarLinks.classList.remove('active');
            });
        });
    }
});