document.addEventListener('DOMContentLoaded', function() {
    // Get all elements needed
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal');

    // Function to open modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        }
    }

    // Function to close all modals
    function closeAllModals() {
        modals.forEach(modal => modal.classList.remove('active'));
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Add click event listeners to "Learn More" buttons
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });

    // Add click event listeners to close buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', closeAllModals);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.impact-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
}); 