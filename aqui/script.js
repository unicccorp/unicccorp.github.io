document.addEventListener('DOMContentLoaded', function() {
    let marqueeSection = document.querySelector('.marquee-section');
    let marquee = marqueeSection.querySelector('.marquee');

    let marqueeWidth = marquee.offsetWidth;
    let contentWidth = marquee.scrollWidth; // Obtener el ancho total del contenido

    let animationDuration = (contentWidth / marqueeWidth) * 10; // Ajustar la velocidad de la animación

    marquee.style.animationDuration = `${animationDuration}s`; // Aplicar duración de la animación
});
