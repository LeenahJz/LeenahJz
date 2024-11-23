// script.js

// Función para mostrar la vista seleccionada
function showView(viewId) {
    // Oculta todas las secciones con la clase 'view'
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.style.display = 'none';
    });

    // Muestra solo la vista que coincide con el ID
    const selectedView = document.getElementById(viewId);
    if (selectedView) {
        selectedView.style.display = 'block';
    }
}

// Escuchar los clicks en los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir comportamiento predeterminado del enlace
        const targetView = this.getAttribute('href').substring(1);  // Obtener el ID de la vista
        showView(targetView);  // Mostrar la vista correspondiente
    });
});

// Mostrar la vista de inicio al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    showView('home');  // Muestra la vista de inicio por defecto
});

