(() => {
    const initializeGallery = () => {
        const section = document.querySelector('.gallery');
        if (!section || section.dataset.initialized === 'true') return;

        section.dataset.initialized = 'true';

        const filters = [...section.querySelectorAll('.gallery-filter')];
        const items = [...section.querySelectorAll('.gallery-item')];
        const pageButtons = [...section.querySelectorAll('.gallery-page')];
        const controls = [...section.querySelectorAll('[data-page-action]')];
        const lightbox = section.querySelector('.gallery-lightbox');
        const lightboxImage = lightbox?.querySelector('img');
        const closeLightbox = lightbox?.querySelector('.gallery-lightbox-close');
        let currentPage = 1;

        const showPage = (page) => {
            currentPage = Number(page);
            pageButtons.forEach((button) => {
                const isActive = Number(button.dataset.page) === currentPage;
                button.classList.toggle('active', isActive);
                button.toggleAttribute('aria-current', isActive);
            });
        };

        const filterItems = (category) => {
            items.forEach((item) => {
                const matches = category === 'all' || item.dataset.category.split(' ').includes(category);
                item.hidden = !matches;
            });
            showPage(1);
        };

        filters.forEach((filter) => {
            filter.addEventListener('click', () => {
                filters.forEach((button) => {
                    const isActive = button === filter;
                    button.classList.toggle('active', isActive);
                    button.setAttribute('aria-pressed', String(isActive));
                });
                filterItems(filter.dataset.category);
            });
        });

        pageButtons.forEach((button) => {
            button.addEventListener('click', () => showPage(button.dataset.page));
        });

        controls.forEach((control) => {
            control.addEventListener('click', () => {
                const offset = control.dataset.pageAction === 'next' ? 1 : -1;
                showPage(Math.min(8, Math.max(1, currentPage + offset)));
            });
        });

        items.forEach((item) => {
            item.addEventListener('click', () => {
                if (!lightbox || !lightboxImage) return;
                const image = item.querySelector('img');
                lightboxImage.src = image.currentSrc || image.src;
                lightboxImage.alt = image.alt;
                lightbox.showModal();
            });
        });

        closeLightbox?.addEventListener('click', () => lightbox.close());
        lightbox?.addEventListener('click', (event) => {
            if (event.target === lightbox) lightbox.close();
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGallery, { once: true });
    } else {
        initializeGallery();
    }

    window.addEventListener('mhas:pages-ready', initializeGallery);
})();
