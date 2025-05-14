document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const body = document.body;

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalId;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                modalOverlay.classList.add('active');
                body.classList.add('modal-open'); // Opcional: para deshabilitar el scroll del fondo
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalId;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                modalOverlay.classList.remove('active');
                body.classList.remove('modal-open'); // Opcional: para habilitar el scroll del fondo
            }
        });
    });

    modalOverlay.addEventListener('click', () => {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        modalOverlay.classList.remove('active');
        body.classList.remove('modal-open'); // Opcional
    });
});