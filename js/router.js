const content = document.querySelector('#content');

const pages = [
    'Pages/about.html',
    'Pages/products.html',
    'Pages/gallery.html',
    'Pages/reviews.html',
    'Pages/contact.html',
];

(async () => {
    const section = await Promise.all(pages.map(async (file) => {
        const res = await fetch(file);
        const html = (await res.text()).replace(/\.\.\/assets/g, '/assets');

        const doc = new DOMParser().parseFromString(html, 'text/html');
        return [...doc.querySelectorAll('section')].map(s => s.outerHTML).join('');

    }));

    content.innerHTML = section.join('');
    if ( typeof initReviews === 'function') initReviews();
})();