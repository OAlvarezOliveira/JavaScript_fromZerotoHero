// Esperar a que el DOM esté cargado para asignar el evento al botón
window.onload = function() {
    const botonOperar = document.getElementById("operar");
	const seleccionFrutas = document.getElementById("misFrutas");
	const nuevaFrutaInput = document.getElementById("nuevaFruta");
	const radioAnadir = document.getElementById("añadir");
	const radioBorrar = document.getElementById("borrar");

    botonOperar.onclick = function() {


        if (radioAnadir.checked) {
            const nombreFruta = nuevaFrutaInput.value.trim();
            let repetida = false; 

            for (let j = 0; j < seleccionFrutas.options.length; j++) {
                if (nombreFruta.toLowerCase() === seleccionFrutas.options[j].value.toLowerCase()) {
                    repetida = true;
                    alert("La fruta está repetida, imposible añadir");
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
            for (let j = 0; j < seleccionFrutas.options.length; j++) {
                if (seleccionFrutas.options[j].selected) {
                    seleccionFrutas.remove(j);
                }
            }
        }
    };
};
