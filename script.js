// script.js
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.transform = 'scale(1.1)';
        });

        service.addEventListener('mouseout', () => {
            service.style.transform = 'scale(1)';
        });
    });
});
