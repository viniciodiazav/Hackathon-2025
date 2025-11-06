document.addEventListener('DOMContentLoaded', () => {

    const botonNuevaEntrada = document.getElementById('btn-abrir-modal-entrada');
    const modalEntrada = document.getElementById('modal-entrada');

    removerFormularioEntrada();

    botonNuevaEntrada.addEventListener('click', () => {
        modalEntrada.classList.add('active');
    })

    function borrarFormulario() {
        const proveedorInput = document.getElementById('proveedor');
        const loteInput = document.getElementById('lote');
        const modeloInput = document.getElementById('modelo');
        const tallaInput = document.getElementById('talla');
        const cantidadInput = document.getElementById('cantidad');

        proveedorInput.value = '';
        loteInput.value = '';
        modeloInput.value = '';
        tallaInput.value = '';
        cantidadInput.value = '';
    }

    function removerFormularioEntrada() {
        modalEntrada.addEventListener('click', e => {
            if (e.target.id == 'btn-cerrar-modal') {
                modalEntrada.classList.remove('active');
                borrarFormulario();
            } else if (e.target.id == 'modal-entrada') {
                modalEntrada.classList.remove('active');
                borrarFormulario();
            }
        });
    }

});