document.addEventListener('DOMContentLoaded', () => {
    const timelineCards = document.querySelectorAll('.timeline-card');

    timelineCards.forEach(card => {
        const learnMoreButton = card.querySelector('.learn-more');
        const closeInfoButton = card.querySelector('.close-info');
        const infoOverlay = card.querySelector('.info-overlay');

        learnMoreButton.addEventListener('click', () => {
            card.classList.add('active-info');
        });

        closeInfoButton.addEventListener('click', () => {
            card.classList.remove('active-info');
        });

        // Opcional: Cerrar el overlay al hacer clic fuera de la tarjeta
        card.addEventListener('click', (event) => {
            if (card.classList.contains('active-info') && !event.target.closest('.info-overlay')) {
                card.classList.remove('active-info');
            }
        });
    });
    
});