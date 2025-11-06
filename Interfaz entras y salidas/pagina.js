document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            targetContent.classList.add('active');
        });
    });

    /*Entradas*/

    const modalEntrada = document.getElementById('modal-entrada');
    const botonNuevaEntrada = document.getElementById('btn-abrir-modal-entrada');
    botonNuevaEntrada.addEventListener('click', () => {
        modalEntrada.classList.add('active');
    })

    function borrarFormularioEntrada() {
        const proveedorInput = document.getElementById('proveedor');
        const fechaInput = document.getElementById('fecha-entrada');
        const loteInput = document.getElementById('lote-entrada');
        const modeloInput = document.getElementById('modelo-entrada');
        const tallaInput = document.getElementById('talla-entrada');
        const cantidadInput = document.getElementById('cantidad-entrada');

        proveedorInput.value = '';
        fechaInput.value = '';
        loteInput.value = '';
        modeloInput.value = '';
        tallaInput.value = '';
        cantidadInput.value = '';
    }

    modalEntrada.addEventListener('click', e => {
        if (e.target.id == 'btn-cerrar-modal-entrada') {
            modalEntrada.classList.remove('active');
            borrarFormularioEntrada();
        }
    });



    /*Salidas*/

    const modalSalida = document.getElementById('modal-salida');
    const botonNuevaSalida = document.getElementById('btn-abrir-modal-salida');
    botonNuevaSalida.addEventListener('click', () => {
        modalSalida.classList.add('active');
    });

    function borrarFormularioSalida() {
        const clienteInput = document.getElementById('cliente');
        const fechaInput = document.getElementById('fecha-salida');
        const loteInput = document.getElementById('lote-salida');
        const modeloInput = document.getElementById('modelo-salida');
        const tallaInput = document.getElementById('talla-salida');
        const cantidadInput = document.getElementById('cantidad-salida');

        clienteInput.value = '';
        fechaInput.value = '';
        loteInput.value = '';
        modeloInput.value = '';
        tallaInput.value = '';
        cantidadInput.value = '';
    }

    modalSalida.addEventListener('click', e => {
        if (e.target.id == 'btn-cerrar-modal-salida') {
            modalSalida.classList.remove('active');
            borrarFormularioSalida();
        }
    });

    /*Entrada y salida*/

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