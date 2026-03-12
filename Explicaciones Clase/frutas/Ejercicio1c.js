// Esperar a que el DOM esté cargado para asignar el evento al botón
window.onload = function() {
    const botonOperar = document.getElementById("operar");
    
    botonOperar.onclick = function() {
        // Obtener referencias a los elementos del DOM
        const SELECION_FRUTAS = document.getElementById("misFrutas");
        const NUEVA_FRUTA = document.getElementById("nuevaFruta");
        const RADIO_AÑADIR = document.getElementById("añadir");
        const RADIO_BORRAR = document.getElementById("borrar");

        // Lógica para AÑADIR
        if (RADIO_AÑADIR.checked) {
            const NOMBRE_FRUTA = NUEVA_FRUTA.value.trim();

        // Lógica de fruta repetida 
        var repetida = false;
        for (let j = 0 ; j < SELECION_FRUTAS.options.length ; j++){

 if (NOMBRE_FRUTA.toLowerCase() === SELECION_FRUTAS.options[j].value.toLowerCase()){
                repetida = true;
                alert("la fruta esta repetida");
                break;
            }

        }
            
            if (NOMBRE_FRUTA !== "" && !repetida) {
                // Crear un nuevo elemento <option>
                const NUEVA_OPCION = document.createElement("option");
                NUEVA_OPCION.value = NOMBRE_FRUTA;
                NUEVA_OPCION.text = NOMBRE_FRUTA;
                
                // Añadirlo a la lista
                SELECION_FRUTAS.add( NUEVA_OPCION );
                
                // Limpiar el campo de texto
                NUEVA_FRUTA.value = "";
                NUEVA_FRUTA.focus();
            } else {
                alert("Por favor, escribe el nombre de una fruta.");
            }
        } 
        
        // Lógica para BORRAR
        else if (RADIO_BORRAR.checked) {
            // Recorremos la lista de atrás hacia adelante para no perder el índice al borrar
            for (let i = SELECION_FRUTAS.options.length - 1; i >= 0; i--) {
                if (SELECION_FRUTAS.options[i].selected) {
                    SELECION_FRUTAS.remove(i);
                }
            }
        }
        
        else {
            alert("Selecciona una operación (Añadir o Borrar).");
        }
    };
};
