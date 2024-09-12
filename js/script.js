function verificarPeso() {
    const pesoInput = document.getElementById('pesoInput');
    const peso = parseFloat(pesoInput.value); // Aseguramos que el valor se trate como un número
    const imagen1 = document.getElementById('pesoImagen1');
    const imagen2 = document.getElementById('pesoImagen2');
    const audio = document.getElementById('pesoAudio');
    const toggleBtn = document.getElementById('toggleImage');
    const alertMessage = document.getElementById('alertMessage'); // Asumimos que existe este elemento para mostrar alertas

    pesoInput.disabled = true;

    // Reiniciamos las visualizaciones
    imagen1.style.display = 'none';
    imagen2.style.display = 'none';
    audio.style.display = 'none';
    toggleBtn.style.display = 'none';
    if (alertMessage) alertMessage.style.display = 'none'; // Esconder mensaje de alerta si está presente

    if (peso <40) {
        // Mostrar un mensaje de error si el peso es menor a 10
        if (alertMessage) {
            alertMessage.textContent = 'Deja el viaje que tu no estas en desnutrición, e igresa un peso correcto🤬.';
            alertMessage.style.display = 'block';
        }
        habilitarInput(); // Re-habilitamos la entrada para corregir el valor
        return; // Detenemos la ejecución de la función aquí
    }

    if (peso >= 76) {
        imagen1.style.display = 'block';
        toggleBtn.style.display = 'block';
        currentImage = 1;
    } else {
        audio.style.display = 'block';
    }
}

let currentImage = 1;

function toggleImage() {
    const imagen1 = document.getElementById('pesoImagen1');
    const imagen2 = document.getElementById('pesoImagen2');

    if (currentImage === 1) {
        imagen1.style.display = 'none';
        imagen2.style.display = 'block';
        currentImage = 2;
    } else {
        imagen2.style.display = 'none';
        imagen1.style.display = 'block';
        currentImage = 1;
    }
}

function habilitarInput() {
    const pesoInput = document.getElementById('pesoInput');
    const enviarBtn = document.querySelector('button[type="submit"]');
    pesoInput.disabled = false;
    enviarBtn.disabled = false;
    pesoInput.value = '';
    pesoInput.focus();
}
