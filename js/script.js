let currentImage = 1;

document.getElementById('weightInput').addEventListener('input', function() {
    const weight = this.value.trim();
    document.querySelector('button[onclick="checkWeight()"]').disabled = !weight;
});

function checkWeight() {
    const weight = document.getElementById('weightInput').value;
    const images = document.getElementById('images');
    const message = document.getElementById('message');
    const music = document.getElementById('music');
    const sendButton = document.querySelector('button[onclick="checkWeight()"]');
    const resetButton = document.querySelector('button[onclick="resetForm()"]');
    const nextButton = document.getElementById('nextImage');

    if (weight >= 55) {
        images.classList.remove('hide');
        message.innerHTML = '';
        music.classList.remove('hide');
        // Intenta reproducir el audio y maneja la promesa
        music.play().catch(error => {
            console.error("Error al intentar reproducir el audio:", error);
            message.innerHTML = 'Haga clic en "Enviar" para reproducir el audio.';
        });
    } else if (weight) {
        images.classList.add('hide');
        music.pause();
        music.currentTime = 0;
        music.classList.add('hide');
        message.innerHTML = 'Esta en el peso correcto. Flaca, vos sos hermosa, y te mereces todo. Amarte es mi necesidad, mi necesidad😏.';
    } else {
        message.innerHTML = 'Por favor, ingresa tu peso.';
        return; // Detén la ejecución si no hay peso ingresado
    }

    sendButton.disabled = true;
    resetButton.disabled = false;
    nextButton.disabled = false;
    document.getElementById('weightInput').disabled = true;
}


function resetForm() {
    document.getElementById('weightInput').value = '';
    document.getElementById('weightInput').disabled = false;
    document.getElementById('images').classList.add('hide');
    document.getElementById('music').pause();
    document.getElementById('music').currentTime = 0;
    document.getElementById('music').classList.add('hide');
    document.getElementById('message').innerHTML = '';
    document.querySelector('button[onclick="checkWeight()"]').disabled = true;
    document.querySelector('button[onclick="resetForm()"]').disabled = true;
    document.getElementById('nextImage').disabled = true;
}

function nextImage() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    // Verifica qué imagen está actualmente visible y alterna
    if (image1.classList.contains('show')) {
        image1.classList.remove('show');
        image1.classList.add('hide');
        image2.classList.remove('hide');
        image2.classList.add('show');
    } else {
        image2.classList.remove('show');
        image2.classList.add('hide');
        image1.classList.remove('hide');
        image1.classList.add('show');
    }
}

