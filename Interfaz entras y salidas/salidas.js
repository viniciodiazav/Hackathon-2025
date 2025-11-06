document.addEventListener('DOMContentLoaded', () => {

    const API_URL = 'http://localhost:8080'

    const modalSalida = document.getElementById('modal-salida');
    const tablaSalidas = document.getElementById('tbody-salidas');

    cargarSalidas();

    function borrarTabla() {
        while (tablaSalidas.firstElementChild) {
            tablaSalidas.firstElementChild.remove();
        }
    }

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

    function cargarSalidas() {
        fetch(`${API_URL}/ultimas10-salidas`)
            .then(respuesta => respuesta.json())
            .then(salidas => {
                salidas.forEach(salida => {
                    const { cliente, fecha, codigoLote, modelo, talla, cantidad } = salida;

                    const nuevaFila = document.createElement('tr');
                    nuevaFila.innerHTML = `
                            <td>${fecha}</td>
                            <td>${modelo}</td>
                            <td><strong>${codigoLote}</strong></td>
                            <td>${talla}</td>
                            <td><span class="pill">${cantidad}</span></td>
                            <td>${cliente}</td>
                        `;

                    tablaSalidas.appendChild(nuevaFila);
                });
            })
    }

    const formSalida = document.getElementById('form-salida');
    formSalida.addEventListener('submit', e => {
        e.preventDefault();
        const cliente = String(document.getElementById('cliente').value);
        const fecha = String(document.getElementById('fecha-salida').value);
        const codigoLote = String(document.getElementById('lote-salida').value);
        const modelo = String(document.getElementById('modelo-salida').value);
        const talla = String(document.getElementById('talla-salida').value);
        const cantidad = String(document.getElementById('cantidad-salida').value);

        const nuevasalida = {
            cliente,
            fecha,
            codigoLote,
            modelo,
            talla,
            cantidad
        }

        fetch(`${API_URL}/salida`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevasalida),
        })
            .then(async respuesta => respuesta.json())
            .then(data => {
                const { cliente, fecha, codigoLote, modelo, talla, cantidad } = data;

                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                            <td>${fecha}</td>
                            <td>${modelo}</td>
                            <td><strong>${codigoLote}</strong></td>
                            <td>${talla}</td>
                            <td><span class="pill">${cantidad}</span></td>
                            <td>${cliente}</td>
                        `;

                tablaSalidas.appendChild(nuevaFila);

                modalSalida.classList.remove('active');
                borrarFormularioSalida();
                borrarTabla();
                cargarSalidas();
            })
            .catch(e => console.log(e));

        borrarFormularioSalida();

    });

});