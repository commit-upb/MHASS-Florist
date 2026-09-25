(() => {
    const pageSources = [
        { id: 'about', file: 'Pages/about.html' },
        { id: 'products', file: 'Pages/products.html' },
        { id: 'gallery', file: 'Pages/gallery.html' },
        { id: 'reviews', file: 'Pages/reviews.html' },
        { id: 'faq', file: 'Pages/faq.html' },
        { id: 'contact', file: 'Pages/contact.html' }
    ];

    const pageAnchors = {
        'index.html': 'home',
        'about.html': 'about',
        'products.html': 'products',
        'gallery.html': 'gallery',
        'reviews.html': 'reviews',
        'faq.html': 'faq',
        'contact.html': 'contact'
    };

    const content = document.querySelector('#content');
    const loadedStyles = new Set(
        [...document.querySelectorAll('link[rel="stylesheet"]')].map((link) => link.href)
    );

    const isExternalUrl = (value) => /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value);

    const getPageId = (pathname) => {
        const filename = pathname.split('/').pop().toLowerCase();
        return pageAnchors[filename] || null;
    };

    const resolveResource = (value, pageUrl) => {
        if (!value || !value.trim() || value.trim().startsWith('#') || isExternalUrl(value.trim())) {
            return value;
        }

        try {
            return new URL(value, pageUrl).href;
        } catch {
            return value;
        }
    };

    const resolveLink = (value, pageUrl) => {
        if (!value || !value.trim() || value.trim().startsWith('#') || isExternalUrl(value.trim())) {
            return value;
        }

        try {
            const target = new URL(value, pageUrl);
            const pageId = getPageId(target.pathname);

            if (pageId) return `#${pageId}`;
            return target.href;
        } catch {
            return value;
        }
    };

    const rewriteSrcset = (value, pageUrl) => {
        return value
            .split(',')
            .map((candidate) => {
                const trimmed = candidate.trim();
                if (!trimmed) return '';

                const separator = trimmed.search(/\s/);
                if (separator === -1) return resolveResource(trimmed, pageUrl);

                const resource = resolveResource(trimmed.slice(0, separator), pageUrl);
                return `${resource}${trimmed.slice(separator)}`;
            })
            .filter(Boolean)
            .join(', ');
    };

    const rewriteAttributes = (element, pageUrl) => {
        ['src', 'data-src'].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (value === null) return;

            if (!value.trim()) {
                element.removeAttribute(attribute);
                return;
            }

            element.setAttribute(attribute, resolveResource(value, pageUrl));
        });

        if (element.hasAttribute('srcset')) {
            element.setAttribute('srcset', rewriteSrcset(element.getAttribute('srcset'), pageUrl));
        }

        ['href', 'action'].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (value === null || !value.trim()) return;

            const resolver = element.tagName === 'A' || element.tagName === 'AREA'
                ? resolveLink
                : resolveResource;
            element.setAttribute(attribute, resolver(value, pageUrl));
        });
    };

    const loadStyles = (documentSource, pageUrl) => {
        documentSource.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
            const href = resolveResource(link.getAttribute('href'), pageUrl);
            if (!href || loadedStyles.has(href)) return;

            const stylesheet = document.createElement('link');
            stylesheet.rel = 'stylesheet';
            stylesheet.href = href;
            document.head.appendChild(stylesheet);
            loadedStyles.add(href);
        });
    };

    const getSections = (documentSource, page) => {
        const sections = [...documentSource.body.children].filter(
            (element) => element.tagName === 'SECTION'
        );

        if (sections.length) {
            sections.forEach((section) => {
                const hasContent = section.textContent.trim() || section.querySelector(
                    'img, iframe, video, form, button, a'
                );
                if (!hasContent) section.dataset.emptyPage = 'true';
            });
            return sections;
        }

        const section = documentSource.createElement('section');
        section.id = page.id;
        section.className = page.id;
        section.dataset.emptyPage = 'true';
        return [section];
    };

    const loadPage = async (page) => {
        const pageUrl = new URL(page.file, document.baseURI);
        const response = await fetch(pageUrl);
        if (response.ok === false) {
            throw new Error(`Unable to load ${page.file}`);
        }

        const source = await response.text();
        const documentSource = new DOMParser().parseFromString(source, 'text/html');
        loadStyles(documentSource, pageUrl);

        const sections = getSections(documentSource, page);
        sections.forEach((section) => {
            section.dataset.page = page.id;
            section.querySelectorAll('*').forEach((element) => {
                rewriteAttributes(element, pageUrl);
            });
        });

        return sections;
    };

    const loadPages = async () => {
        if (!content) return { sections: [], errors: [] };

        content.setAttribute('aria-busy', 'true');
        const errors = [];

        const results = await Promise.all(
            pageSources.map(async (page) => {
                try {
                    return await loadPage(page);
                } catch (error) {
                    errors.push({ page: page.file, error });
                    return [];
                }
            })
        );

        const sections = results.flat();
        if (!sections.length && errors.length) {
            const message = document.createElement('p');
            message.className = 'router-error';
            message.textContent = 'Halaman tidak dapat dimuat. Jalankan situs melalui server lokal.';
            content.replaceChildren(message);
        } else {
            content.replaceChildren(...sections);
        }

        content.setAttribute('aria-busy', 'false');
        content.dataset.routerReady = 'true';
        document.documentElement.dataset.pagesReady = 'true';
        window.dispatchEvent(new CustomEvent('mhas:pages-ready', {
            detail: { sections, errors }
        }));

        return { sections, errors };
    };

    const ready = document.readyState === 'loading'
        ? new Promise((resolve) => {
            document.addEventListener('DOMContentLoaded', resolve, { once: true });
        }).then(loadPages)
        : loadPages();

    window.mhasRouter = { ready, loadPages };
})();
