const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider'); // Definimos la variable slider aquí
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;
let currentIndex = 0;
let intervalId;
const AUTOPLAY_INTERVAL = 1500; // Tiempo entre slides (en ms)
const PAUSE_DURATION = 10000; // Tiempo de pausa tras interacción (en ms)

// Función para mostrar una diapositiva específica
function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para iniciar la reproducción automática
function startAutoplay() {
    intervalId = setInterval(() => {
        showSlide(currentIndex + 1);
    }, AUTOPLAY_INTERVAL);
}

// Función para detener la reproducción automática
function stopAutoplay() {
    clearInterval(intervalId);
}

// Función para manejar la interacción del usuario
function handleUserInteraction() {
    stopAutoplay();
}

// Configura los botones de navegación
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    handleUserInteraction();
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    handleUserInteraction();
});

// Detener el autoplay cuando el usuario interactúe con cualquier parte del slider
slider.addEventListener('click', handleUserInteraction);

// Inicia la reproducción automática al cargar la página
startAutoplay();

// Reiniciar el autoplay después de la pausa
function restartAutoplay() {
    stopAutoplay();
    setTimeout(startAutoplay, PAUSE_DURATION);
}

// Reiniciar el autoplay después de que el usuario haga clic
slider.addEventListener('click', () => {
    restartAutoplay();
});
