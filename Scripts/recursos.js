// JavaScript para la página de recursos y servicios
document.addEventListener('DOMContentLoaded', function() {
    // Gestión de modales
    const modals = document.querySelectorAll('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const learnMoreBtns = document.querySelectorAll('.learn-more');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // Función para abrir el modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }
    
    // Función para cerrar el modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Event listeners para botones "Ver más"
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });
    
    // Event listeners para botones "Cerrar"
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-id');
            closeModal(modalId);
        });
    });
    
    // Cerrar modal al hacer clic en overlay
    modalOverlay.addEventListener('click', function() {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        this.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
    
    // Opcional: Añadir filtrado por categorías
    // Crear botones de categoría dinámicamente
    const resourceContainer = document.querySelector('.resources-container');
    if (resourceContainer) {
        const categories = new Set();
        const resourceCards = document.querySelectorAll('.resource-card');
        
        // Recopilar todas las categorías únicas
        resourceCards.forEach(card => {
            if (card.dataset.category) {
                categories.add(card.dataset.category);
            }
        });
        
        // Crear la sección de filtros si hay categorías
        if (categories.size > 0) {
            const filterContainer = document.createElement('div');
            filterContainer.className = 'category-filter';
            
            // Botón para mostrar todos
            const allBtn = document.createElement('button');
            allBtn.className = 'category-btn active';
            allBtn.textContent = 'Todos';
            allBtn.addEventListener('click', function() {
                document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                resourceCards.forEach(card => card.style.display = 'flex');
            });
            filterContainer.appendChild(allBtn);
            
            // Botones para cada categoría
            categories.forEach(category => {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalizar primera letra
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    resourceCards.forEach(card => {
                        if (card.dataset.category === category) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
                filterContainer.appendChild(btn);
            });
            
            // Insertar filtros antes del contenedor de recursos
            resourceContainer.parentNode.insertBefore(filterContainer, resourceContainer);
        }
    }
    
    // Redirección de botones "Ver más" con href
    const buttons = document.querySelectorAll(".buttons-container .learn-more");

    buttons.forEach(button => {
        const href = button.getAttribute("href");
        if (href) {
            button.addEventListener("click", () => {
                window.location.href = href;
            });
        }
    });
});