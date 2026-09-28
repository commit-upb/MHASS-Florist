(() => {
    const formatPrice = (price) => `Rp${price.toLocaleString('id-ID')}`;

    const initializeCart = () => {
        const drawer = document.querySelector('.cart-drawer');
        const toggle = document.querySelector('.cart-button');
        const backdrop = document.querySelector('.cart-backdrop');
        if (!drawer || !toggle || drawer.dataset.initialized === 'true') return;

        drawer.dataset.initialized = 'true';
        const closeButton = drawer.querySelector('.cart-close');
        const itemsElement = drawer.querySelector('.cart-items');
        const itemCount = drawer.querySelector('.cart-item-count');
        const totalElement = drawer.querySelector('.cart-total strong');
        const checkoutButton = drawer.querySelector('.cart-checkout');
        const badge = toggle.querySelector('.cart-count');
        const cart = [];

        const closeCart = () => {
            drawer.classList.remove('open');
            backdrop.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('cart-open');
        };

        const openCart = () => {
            drawer.classList.add('open');
            backdrop.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('cart-open');
            closeButton.focus();
        };

        const getTotalQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);
        const getTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        const renderCart = () => {
            const totalQuantity = getTotalQuantity();
            itemCount.textContent = `${totalQuantity} Item`;
            totalElement.textContent = formatPrice(getTotal());
            badge.textContent = totalQuantity;
            badge.classList.toggle('has-items', totalQuantity > 0);
            checkoutButton.disabled = cart.length === 0;

            if (!cart.length) {
                itemsElement.innerHTML = '<p class="cart-empty">Keranjang Anda masih kosong.</p>';
                return;
            }

            itemsElement.innerHTML = cart.map((item) => `
                <article class="cart-item" data-id="${item.id}">
                    <img class="cart-item-image" src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3 class="cart-item-name">${item.name}</h3>
                        <p class="cart-item-price">${formatPrice(item.price)}</p>
                        <div class="cart-quantity" aria-label="Jumlah ${item.name}">
                            <button type="button" data-action="decrease" aria-label="Kurangi jumlah ${item.name}">-</button>
                            <span>${item.quantity}</span>
                            <button type="button" data-action="increase" aria-label="Tambah jumlah ${item.name}">+</button>
                        </div>
                    </div>
                    <button class="cart-remove" type="button" data-action="remove" aria-label="Hapus ${item.name}">&#128465;</button>
                </article>
            `).join('');
        };

        const addProduct = (product) => {
            const existing = cart.find((item) => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            renderCart();
            openCart();
        };

        toggle.addEventListener('click', () => {
            if (drawer.classList.contains('open')) closeCart();
            else openCart();
        });
        closeButton.addEventListener('click', closeCart);
        backdrop.addEventListener('click', closeCart);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && drawer.classList.contains('open')) closeCart();
        });

        itemsElement.addEventListener('click', (event) => {
            const actionButton = event.target.closest('[data-action]');
            if (!actionButton) return;
            const itemElement = actionButton.closest('.cart-item');
            const index = cart.findIndex((item) => item.id === itemElement.dataset.id);
            if (index === -1) return;

            if (actionButton.dataset.action === 'increase') cart[index].quantity += 1;
            if (actionButton.dataset.action === 'decrease') cart[index].quantity -= 1;
            if (actionButton.dataset.action === 'remove' || cart[index].quantity < 1) cart.splice(index, 1);
            renderCart();
        });

        checkoutButton.addEventListener('click', () => {
            const order = cart.map((item) => `- ${item.name} x${item.quantity} (${formatPrice(item.price * item.quantity)})`).join('\n');
            const message = `Halo MHAS Florist, saya ingin memesan:\n${order}\n\nGrand Total: ${formatPrice(getTotal())}`;
            window.open(`https://wa.me/6289510574048?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
        });

        document.addEventListener('click', (event) => {
            const button = event.target.closest('.products-action button:last-child');
            if (!button) return;
            event.preventDefault();
            const card = button.closest('.products-card');
            if (!card) return;
            const name = card.querySelector('.products-name')?.textContent.trim() || 'Rangkaian Bunga';
            const priceText = card.querySelector('.products-price')?.textContent || '';
            const price = Number(priceText.replace(/[^0-9]/g, '')) || 0;
            const image = card.querySelector('.products-image img');
            addProduct({
                id: `${name}-${image?.currentSrc || image?.src || 'product'}`,
                name,
                price,
                image: image?.currentSrc || image?.src || 'assets/images/tes.png'
            });
        });

        renderCart();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCart, { once: true });
    } else {
        initializeCart();
    }
})();
