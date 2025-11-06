document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DE PESTAÑAS (TABS) ---
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.content-tab');

    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');
                const targetContent = document.getElementById(targetId);

                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // --- 2. LÓGICA GENERAL DE MODALES ---

    // Función genérica para ABRIR un modal
    const abrirModal = (modal) => {
        if (modal) modal.classList.add('active');
    };

    // Función genérica para CERRAR un modal y LIMPIAR su formulario
    const cerrarModal = (modal) => {
        if (modal) {
            modal.classList.remove('active');
            const form = modal.querySelector('form'); // Busca el form DENTRO del modal
            if (form) form.reset(); // Limpia el formulario
        }
    };

    // --- 3. CONFIGURACIÓN DEL MODAL DE ENTRADA ---
    const modalEntrada = document.getElementById('modal-entrada');
    const openModalBtnEntrada = document.getElementById('btn-abrir-modal-entrada');
    const closeModalBtnEntrada = document.getElementById('btn-cerrar-modal-entrada');
    const formEntrada = document.getElementById('form-entrada');

    if (modalEntrada && openModalBtnEntrada && closeModalBtnEntrada && formEntrada) {
        // Abrir
        openModalBtnEntrada.addEventListener('click', () => abrirModal(modalEntrada));
        
        // Cerrar con el botón 'X'
        closeModalBtnEntrada.addEventListener('click', () => cerrarModal(modalEntrada));
        
        // Cerrar haciendo clic fuera
        modalEntrada.addEventListener('click', (e) => {
            if (e.target === modalEntrada) cerrarModal(modalEntrada);
        });
        
        // Enviar formulario
        formEntrada.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Entrada registrada (simulación)');
            cerrarModal(modalEntrada);
        });
    }

    // --- 4. CONFIGURACIÓN DEL MODAL DE SALIDA (AÑADIDO) ---
    const modalSalida = document.getElementById('modal-salida');
    const openModalBtnSalida = document.getElementById('btn-abrir-modal-salida');
    const closeModalBtnSalida = document.getElementById('btn-cerrar-modal-salida');
    const formSalida = document.getElementById('form-salida');

    if (modalSalida && openModalBtnSalida && closeModalBtnSalida && formSalida) {
        // Abrir
        openModalBtnSalida.addEventListener('click', () => abrirModal(modalSalida));
        
        // Cerrar con el botón 'X'
        closeModalBtnSalida.addEventListener('click', () => cerrarModal(modalSalida));
        
        // Cerrar haciendo clic fuera
        modalSalida.addEventListener('click', (e) => {
            if (e.target === modalSalida) cerrarModal(modalSalida);
        });
        
        // Enviar formulario
        formSalida.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Salida registrada (simulación)');
            cerrarModal(modalSalida);
        });
    }

    // --- 5. CERRAR MODALES CON TECLA 'ESCAPE' ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalEntrada && modalEntrada.classList.contains('active')) {
                cerrarModal(modalEntrada);
            }
            if (modalSalida && modalSalida.classList.contains('active')) {
                cerrarModal(modalSalida);
            }
        }
    });

});