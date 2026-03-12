// Esperar a que el DOM esté cargado para asignar el evento al botón
window.onload = function() {
    const botonOperar = document.getElementById("operar");

    botonOperar.onclick = function() {
        const seleccionFrutas = document.getElementById("misFrutas");
        const nuevaFrutaInput = document.getElementById("nuevaFruta");
        const radioAnadir = document.getElementById("añadir");
        const radioBorrar = document.getElementById("borrar");

        if (radioAnadir.checked) {
            const nombreFruta = nuevaFrutaInput.value.trim();
            let repetida = false; // let porque cambia su valor

            for (let j = 0; j < seleccionFrutas.options.length; j++) {
                if (nombreFruta.toLowerCase() === seleccionFrutas.options[j].value.toLowerCase()) {
                    repetida = true;
                    alert("La fruta ya está repetida");
                    break;
                }
            }

            if (nombreFruta !== "" && !repetida) {
                const nuevaOpcion = document.createElement("option");
                nuevaOpcion.value = nombreFruta;
                nuevaOpcion.text = nombreFruta;
                
                seleccionFrutas.add(nuevaOpcion);
                nuevaFrutaInput.value = "";
                nuevaFrutaInput.focus();
            } else if (nombreFruta === "") {
                alert("Por favor, escribe el nombre de una fruta.");
            }
        } 
        else if (radioBorrar.checked) {
            for (let i = seleccionFrutas.options.length - 1; i >= 0; i--) {
                if (seleccionFrutas.options[i].selected) {
                    seleccionFrutas.remove(i);
                }
            }
        }
    };
};
