const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;
let currentIndex = 0;
let intervalId;
const AUTOPLAY_INTERVAL = 4000; // Tiempo entre slides (en ms)
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
  setTimeout(startAutoplay, PAUSE_DURATION);
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

// Configura las imágenes para que también detengan el autoplay
sliderItems.forEach(item => {
  item.addEventListener('click', handleUserInteraction);
});

// Inicia la reproducción automática al cargar la página
startAutoplay();
