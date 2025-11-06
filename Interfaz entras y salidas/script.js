document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE PESTAÑAS (TABS) ---
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // Quita 'active' de todas las pestañas y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Añade 'active' a la pestaña y contenido clickeado
            tab.classList.add('active');
            targetContent.classList.add('active');
        });
    });

    // --- LÓGICA MODAL ENTRADA (Tu código original adaptado) ---
    const botonNuevaEntrada = document.getElementById('btn-abrir-modal-entrada');
    const modalEntrada = document.getElementById('modal-entrada');

    removerFormularioEntrada();

    botonNuevaEntrada.addEventListener('click', () => {
        modalEntrada.classList.add('active');
    })

    function borrarFormularioEntrada() {
        // IDs actualizados
        const proveedorInput = document.getElementById('proveedor');
        const fechaInput = document.getElementById('fecha-entrada'); // <-- AÑADIDO
        const loteInput = document.getElementById('lote-entrada');
        const modeloInput = document.getElementById('modelo-entrada');
        const tallaInput = document.getElementById('talla-entrada');
        const cantidadInput = document.getElementById('cantidad-entrada');

        // Comprobación para evitar errores si un campo no existe
        if (proveedorInput) proveedorInput.value = '';
        if (fechaInput) fechaInput.value = ''; // <-- AÑADIDO
        if (loteInput) loteInput.value = '';
        if (modeloInput) modeloInput.value = '';
        if (tallaInput) tallaInput.value = '';
        if (cantidadInput) cantidadInput.value = '';
    }

    function removerFormularioEntrada() {
        modalEntrada.addEventListener('click', e => {
            // ID de botón actualizado
            if (e.target.id == 'btn-cerrar-modal-entrada') {
                modalEntrada.classList.remove('active');
                borrarFormularioEntrada();
            } else if (e.target.id == 'modal-entrada') {
                modalEntrada.classList.remove('active');
                borrarFormularioEntrada();
            }
        });

        // Manejo de envío (opcional, pero buena práctica)
        const formEntrada = document.getElementById('form-entrada');
        formEntrada.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página
            alert('Entrada registrada (simulación)');
            modalEntrada.classList.remove('active');
            borrarFormularioEntrada();
        });
    }

    // --- LÓGICA MODAL SALIDA (AÑADIDO con tu estilo) ---
    const botonNuevaSalida = document.getElementById('btn-abrir-modal-salida');
    const modalSalida = document.getElementById('modal-salida');

    removerFormularioSalida();

    botonNuevaSalida.addEventListener('click', () => {
        modalSalida.classList.add('active');
    });

    function borrarFormularioSalida() {
        const clienteInput = document.getElementById('cliente');
        const fechaInput = document.getElementById('fecha-salida'); // <-- AÑADIDO
        const loteInput = document.getElementById('lote-salida');
        const modeloInput = document.getElementById('modelo-salida');
        const tallaInput = document.getElementById('talla-salida');
        const cantidadInput = document.getElementById('cantidad-salida');

        if (clienteInput) clienteInput.value = '';
        if (fechaInput) fechaInput.value = ''; // <-- AÑADIDO
        if (loteInput) loteInput.value = '';
        if (modeloInput) modeloInput.value = '';
        if (tallaInput) tallaInput.value = '';
        if (cantidadInput) cantidadInput.value = '';
    }

    function removerFormularioSalida() {
        modalSalida.addEventListener('click', e => {
            if (e.target.id == 'btn-cerrar-modal-salida') {
                modalSalida.classList.remove('active');
                borrarFormularioSalida();
            } else if (e.target.id == 'modal-salida') {
                modalSalida.classList.remove('active');
                borrarFormularioSalida();
            }
        });

        // Manejo de envío
        const formSalida = document.getElementById('form-salida');
        formSalida.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página
            alert('Salida registrada (simulación)');
            modalSalida.classList.remove('active');
            borrarFormularioSalida();
        });
    }

    // --- CERRAR CON TECLA ESCAPE (Añadido) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalEntrada.classList.contains('active')) {
                modalEntrada.classList.remove('active');
                borrarFormularioEntrada();
            }
            if (modalSalida.classList.contains('active')) {
                modalSalida.classList.remove('active');
                borrarFormularioSalida();
            }
        }
    });

});