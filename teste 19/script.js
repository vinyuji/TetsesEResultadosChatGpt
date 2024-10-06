
// script.js
// Efeito de animação ao rolar a página
window.addEventListener('scroll', function() {
    const arduinoImage = document.querySelector('.arduino-image');
    if (window.scrollY > 100) {
        arduinoImage.style.transform = 'scale(1.1)';
    } else {
        arduinoImage.style.transform = 'scale(1)';
    }
});
