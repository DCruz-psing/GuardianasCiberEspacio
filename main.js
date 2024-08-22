document.addEventListener('DOMContentLoaded', function() {
    // Variables para almacenar referencias a elementos
    const navLinks = document.querySelectorAll('.tab-link'); // Selecciona los enlaces de las pestañas
    const sections = document.querySelectorAll('.tab-content section'); // Selecciona las secciones de contenido

    // Función para ocultar todas las secciones
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('visible');
        });
    }

    // Función para mostrar una sección específica
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('visible');
        }
    }

    // Añadir eventos de clic a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
             const targetId = this.getAttribute('href').substring(1); // Obtiene el ID de la sección objetivo
            hideAllSections(); // Oculta todas las secciones
            showSection(targetId); // Muestra la sección seleccionada

            // Marca el enlace activo
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mostrar la primera sección por defecto
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
    });
    // Manejar el envío del formulario de contacto
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Verificar que todos los campos estén completos
        if (name && email && message) {
            // Mostrar un mensaje de agradecimiento
            responseMessage.innerText = 'Gracias, ' + name + '. Tu mensaje ha sido enviado.';
            // Reiniciar el formulario
            contactForm.reset();
        } else {
            // Mostrar un mensaje de alerta si hay campos incompletos
            responseMessage.innerText = 'Por favor, completa todos los campos.';
        }
    });

    // Manejar el clic en el botón de reinicio del formulario
    if (resetButton) { // Verifica si el botón de reinicio existe
        resetButton.addEventListener('click', function() {
            contactForm.reset(); // Limpia los campos del formulario
            responseMessage.innerText = ''; // Borra el mensaje de respuesta
        });
    }

