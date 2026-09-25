(() => {
    const pageAnchors = {
        'index.html': 'home',
        'about.html': 'about',
        'products.html': 'products',
        'gallery.html': 'gallery',
        'reviews.html': 'reviews',
        'faq.html': 'faq',
        'contact.html': 'contact'
    };

    let menuElements;
    let navigationInitialized = false;
    let scrollFrame;

    const getNavigationLinks = () => {
        return [...document.querySelectorAll('.nav-menu .nav-link')];
    };

    const getLinkSection = (link) => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) return href.slice(1);

        const filename = href.split('/').pop().split('#')[0].toLowerCase();
        return pageAnchors[filename] || null;
    };

    const setActiveLink = (sectionId) => {
        getNavigationLinks().forEach((link) => {
            const isActive = getLinkSection(link) === sectionId;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    const closeMenu = () => {
        if (!menuElements) return;
        menuElements.mobileMenu.classList.remove('active');
        menuElements.menuToggle.classList.remove('active');
        menuElements.menuToggle.setAttribute('aria-expanded', 'false');
        menuElements.menuToggle.setAttribute('aria-label', 'Open Menu');
    };

    const toggleMenu = () => {
        if (!menuElements) return;

        const isOpen = menuElements.mobileMenu.classList.toggle('active');
        menuElements.menuToggle.classList.toggle('active', isOpen);
        menuElements.menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuElements.menuToggle.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    };

    const initMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.nav-menu');
        if (!menuToggle || !mobileMenu) return;

        menuElements = {
            navbar: menuToggle.closest('header') || document.querySelector('.navbar'),
            menuToggle,
            mobileMenu
        };
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.addEventListener('click', toggleMenu);
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('click', (event) => {
            if (!menuElements) return;
            if (menuElements.navbar?.contains(event.target)) return;
            closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    };

    const getSections = () => {
        return [...document.querySelectorAll('#home, #content > section[id]:not([data-empty-page])')];
    };

    const getCurrentSection = () => {
        const sections = getSections();
        if (!sections.length) {
            const filename = window.location.pathname.split('/').pop().toLowerCase();
            return pageAnchors[filename] || null;
        }

        const scrollPosition = window.scrollY + 120;
        let current = sections[0].id;

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
                current = section.id;
            }
        });

        return current;
    };

    const updateActiveLink = () => {
        const current = getCurrentSection();
        if (current) setActiveLink(current);
    };

    const initNavigation = () => {
        const links = getNavigationLinks();
        if (!links.length) return;

        if (!navigationInitialized) {
            links.forEach((link) => {
                link.addEventListener('click', () => {
                    const sectionId = getLinkSection(link);
                    if (sectionId) setActiveLink(sectionId);
                });
            });

            window.addEventListener('scroll', () => {
                if (scrollFrame) return;
                scrollFrame = window.requestAnimationFrame(() => {
                    scrollFrame = null;
                    updateActiveLink();
                });
            }, { passive: true });
            window.addEventListener('hashchange', updateActiveLink);
            navigationInitialized = true;
        }

        updateActiveLink();
    };

    const initReviews = () => {
        if (typeof window.initReviews === 'function') {
            window.initReviews();
        }
    };

    const scrollToHash = () => {
        if (document.documentElement.dataset.pagesReady !== 'true') return;

        const target = document.getElementById(window.location.hash.slice(1));
        if (target) {
            window.requestAnimationFrame(() => target.scrollIntoView());
        }
    };

    const initDynamicContent = () => {
        initNavigation();
        initReviews();
        scrollToHash();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initMenu();
            initDynamicContent();
        }, { once: true });
    } else {
        initMenu();
        initDynamicContent();
    }

    window.addEventListener('mhas:pages-ready', initDynamicContent);
})();
