/* ==========================================================================
   CART — CRUD operations + sessionStorage persistence
   ========================================================================== */

const Cart = (() => {
  const STORAGE_KEY = window.SITE_CONFIG?.CART_STORAGE_KEY || "mhas-cart";

  let items = {};

  function load() {
    try {
      items = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      items = {};
    }
  }

  function save() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    render();
    bumpBadge();
  }

  function getAll() {
    return { ...items };
  }

  function getEntries() {
    return Object.entries(items).filter(([, qty]) => qty > 0);
  }

  function getCount() {
    return getEntries().reduce((sum, [, qty]) => sum + qty, 0);
  }

  function add(productId) {
    items[productId] = (items[productId] || 0) + 1;
    save();
  }

  function update(productId, delta) {
    items[productId] = (items[productId] || 0) + delta;
    if (items[productId] < 1) delete items[productId];
    save();
  }

  function remove(productId) {
    delete items[productId];
    save();
  }

  function formatPrice() {
    return "Harga dikonfirmasi";
  }

  /* Badge animation */
  function bumpBadge() {
    const badge = document.querySelector(".cart-count");
    if (!badge) return;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }

  /* Render cart drawer contents */
  function render() {
    const entries = getEntries();
    const count = getCount();
    const cartCount = document.querySelector(".cart-count");
    const cartItems = document.querySelector(".cart-items");
    const totalValue = document.querySelector(".total-value");

    if (cartCount) cartCount.textContent = count;

    if (!cartItems) return;

    cartItems.innerHTML = entries.length
      ? entries
          .map(([id, quantity]) => {
            const product = PRODUCTS.find((p) => p.id === id);
            if (!product) return "";
            return `
              <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div>
                  <h3>${product.name}</h3>
                  <p>${formatPrice()}</p>
                  <div class="qty-controls">
                    <button data-qty="${id}" data-change="-1" aria-label="Kurangi jumlah">&minus;</button>
                    <span>${quantity}</span>
                    <button data-qty="${id}" data-change="1" aria-label="Tambah jumlah">+</button>
                  </div>
                  <button class="remove-item" data-remove="${id}">Remove</button>
                </div>
              </div>
            `;
          })
          .join("")
      : '<p class="empty-cart">Keranjang masih kosong. Pilih rangkaian untuk memulainya.</p>';

    if (totalValue) {
      totalValue.textContent = entries.length
        ? formatPrice()
        : formatPrice();
    }
  }

  load();

  return { getAll, getEntries, getCount, add, update, remove, render, formatPrice };
})();
