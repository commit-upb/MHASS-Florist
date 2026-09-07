/* ==========================================================================
   PRODUCTS — Render product cards + category filtering
   ========================================================================== */

const Products = (() => {
  const grid = document.querySelector("#product-grid");

  function render(filter = "all") {
    if (!grid) return;

    const visible =
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = visible.length
      ? visible
          .map(
            (product) => `
            <article class="product-card">
              <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
              <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="product-actions">
                  <button class="detail-button" data-detail="${product.id}">View detail</button>
                  <button class="add-button" data-add="${product.id}">Add to Cart</button>
                </div>
              </div>
            </article>
          `,
          )
          .join("")
      : '<p class="no-products">Belum ada rangkaian pada kategori ini.</p>';
  }

  function find(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  }

  return { render, find };
})();
