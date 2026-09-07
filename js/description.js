const ProductDetail = (() => {
  const container = document.querySelector("#product-detail");
  let currentProduct = null;

  function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function render() {
    if (!container) return;

    const productId = getProductId();
    const product = PRODUCTS.find((item) => item.id === productId) || PRODUCTS[0];

    if (!product) {
      currentProduct = null;
      container.innerHTML = `
        <div class="detail-empty">
          <h1>Produk tidak ditemukan</h1>
          <p>Rangkaian yang kamu pilih tidak tersedia saat ini.</p>
          <a class="button button-primary" href="index.html">Kembali ke koleksi</a>
        </div>
      `;
      return;
    }

    currentProduct = product;

    const whatsappUrl = `https://wa.me/${(window.SITE_CONFIG && window.SITE_CONFIG.WHATSAPP_NUMBER) || "6281234567890"}?text=${encodeURIComponent((window.SITE_CONFIG && window.SITE_CONFIG.WHATSAPP_MESSAGE) ? `${window.SITE_CONFIG.WHATSAPP_MESSAGE} ${product.name}` : `Halo MHAS Florist, saya ingin memesan ${product.name}`)}`;

    container.innerHTML = `
      <article class="detail-hero">
        <div class="detail-image-panel">
          <img src="${product.image}" alt="${product.name}" loading="eager" />
        </div>
        <div class="detail-copy">
          <span class="section-kicker">${product.category}</span>
          <h1>${product.name}</h1>
          <p class="detail-price">Harga dikonfirmasi via WhatsApp</p>
          <p class="detail-description">${product.description}</p>

          <div class="detail-actions">
            <button class="button button-primary" type="button" data-detail-add>Add to Cart</button>
            <a class="button button-dark" href="${whatsappUrl}" target="_blank" rel="noreferrer">
              Order via WhatsApp <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </article>
    `;

    const addButton = document.querySelector("[data-detail-add]");
    if (addButton) {
      addButton.addEventListener("click", () => {
        if (currentProduct) {
          Cart.add(currentProduct.id);
          UI.openCart();
        }
      });
    }
  }

  return { render };
})();

document.addEventListener("DOMContentLoaded", () => {
  ProductDetail.render();
});
