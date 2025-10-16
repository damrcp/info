let carouselIndex = 1;

function goToSlide(slideId) {
    const currentSlide = document.querySelector('.slide.active');
    const nextSlide = document.getElementById(slideId);
 
    if (nextSlide && currentSlide !== nextSlide) {
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }
        nextSlide.classList.add('active');

        // Si la nueva diapositiva es la del carrusel, reinícialo
        if (slideId === 'option-a1a2') {
            carouselIndex = 1;
            showCarouselSlide(carouselIndex);
        }
    }
}
 
// Al cargar la página, asegúrate de que la primera diapositiva esté visible.
// Usamos 'DOMContentLoaded' para ejecutar el script una vez que el HTML está listo.
document.addEventListener('DOMContentLoaded', () => {
    // Oculta todos los slides excepto el primero al inicio
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById('start').classList.add('active');
});

// --- Lógica para el carrusel interno ---

function changeCarouselSlide(n) {
    showCarouselSlide(carouselIndex += n);
}

function showCarouselSlide(n) {
    const slides = document.querySelectorAll('#option-a1a2 .carousel-slide');
    if (n > slides.length) {
        carouselIndex = 1; // Vuelve al primero
    }
    if (n < 1) {
        carouselIndex = slides.length; // Va al último
    }
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[carouselIndex - 1].classList.add('active');
}