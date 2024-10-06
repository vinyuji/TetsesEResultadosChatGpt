
// Animações ao rolar a página
window.addEventListener('scroll', function() {
    const benefitsSection = document.getElementById('benefits');
    const sectionPosition = benefitsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        benefitsSection.style.opacity = 1;
        benefitsSection.style.transform = 'translateY(0)';
    } else {
        benefitsSection.style.opacity = 0;
        benefitsSection.style.transform = 'translateY(50px)';
    }
});
