document.addEventListener('DOMContentLoaded', () => {

    const API_URL = 'http://localhost:8080'

    const modalEntrada = document.getElementById('modal-entrada');
    const tablaEntradas = document.getElementById('tbody-entradas');

    // --- CÓDIGO AÑADIDO: INICIO (Validación de formulario) ---

    const formEntrada = document.getElementById('form-entrada');
    const btnGuardarEntrada = document.getElementById('btn-guardar-entrada');
    
    // Lista de todos los inputs del formulario de entrada
    const inputsEntrada = [
        document.getElementById('proveedor'),
        document.getElementById('fecha-entrada'),
        document.getElementById('lote-entrada'),
        document.getElementById('modelo-entrada'),
        document.getElementById('talla-entrada'),
        document.getElementById('cantidad-entrada')
    ];

    // Función que revisa si todos los inputs tienen valor
    function validarFormularioEntrada() {
        // .every() revisa si TODOS los elementos cumplen la condición
        const todosLlenos = inputsEntrada.every(input => input.value.trim() !== '');
        
        // Si están todos llenos, se quita el 'disabled'. Si no, se pone.
        btnGuardarEntrada.disabled = !todosLlenos;
    }

    // Añadimos un 'escuchador' a cada input
    inputsEntrada.forEach(input => {
        input.addEventListener('input', validarFormularioEntrada); // Valida mientras escribes
        input.addEventListener('change', validarFormularioEntrada); // Valida si cambia (para la fecha)
    });

    // --- CÓDIGO AÑADIDO: FIN ---


    cargarEntradas();

    function borrarTabla() {
        while (tablaEntradas.firstElementChild) {
            tablaEntradas.firstElementChild.remove();
        }
    }

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

        // --- MODIFICACIÓN: Se añade esta línea para resetear el botón ---
        if(btnGuardarEntrada) btnGuardarEntrada.disabled = true; 
    }

    function cargarEntradas() {
        fetch(`${API_URL}/ultimas10-entradas`)
            .then(respuesta => respuesta.json())
            .then(entradas => {
                entradas.forEach(entrada => {
                    const { proveedor, fecha, codigoLote, modelo, talla, cantidad } = entrada;

                    const nuevaFila = document.createElement('tr');
                    nuevaFila.innerHTML = `
                            <td>${fecha}</td>
                            <td>${modelo}</td>
                            <td><strong>${codigoLote}</strong></td>
                            <td>${talla}</td>
                            <td><span class="pill">${cantidad}</span></td>
                            <td>${proveedor}</td>
                        `;

                    tablaEntradas.appendChild(nuevaFila);
                });
            })
    }

    // const formEntrada = document.getElementById('form-entrada'); //<- Esta línea ya estaba en el código añadido
    formEntrada.addEventListener('submit', e => {
        e.preventDefault();
        const proveedor = String(document.getElementById('proveedor').value);
        const fecha = String(document.getElementById('fecha-entrada').value);
        const codigoLote = String(document.getElementById('lote-entrada').value);
        const modelo = String(document.getElementById('modelo-entrada').value);
        const talla = String(document.getElementById('talla-entrada').value);
        const cantidad = String(document.getElementById('cantidad-entrada').value);

        const nuevaEntrada = {
            proveedor,
            fecha,
            codigoLote,
            modelo,
            talla,
            cantidad
        }

        fetch(`${API_URL}/entrada`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevaEntrada),
        })
            .then(async respuesta => respuesta.json())
            .then(data => {
                const { proveedor, fecha, codigoLote, modelo, talla, cantidad } = data;

                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                            <td>${fecha}</td>
                            <td>${modelo}</td>
                            <td><strong>${codigoLote}</strong></td>
                            <td>${talla}</td>
                            <td><span class="pill">${cantidad}</span></td>
                            <td>${proveedor}</td>
                        `;

                tablaEntradas.appendChild(nuevaFila);

                modalEntrada.classList.remove('active');
                borrarFormularioEntrada();
                borrarTabla();
                cargarEntradas();
            })
            .catch(e => console.log(e));

        borrarFormularioEntrada();

    });

});