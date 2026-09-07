/* ==========================================================================
   MAIN — Initialization + global event wiring
   ========================================================================== */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     Initial Render
     -------------------------------------------------------------------------- */

  Products.render();
  Cart.render();
  UI.init();

  /* --------------------------------------------------------------------------
     Filter Buttons
     -------------------------------------------------------------------------- */

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      const active = document.querySelector(".filter.active");
      if (active) active.classList.remove("active");
      button.classList.add("active");
      Products.render(button.dataset.filter);
    });
  });

  /* --------------------------------------------------------------------------
     Product Grid — Add to Cart + View Detail
     -------------------------------------------------------------------------- */

  const productGrid = document.querySelector("#product-grid");
  if (productGrid) {
    productGrid.addEventListener("click", (event) => {
      const addBtn = event.target.closest("[data-add]");
      const detailBtn = event.target.closest("[data-detail]");

      if (addBtn) {
        Cart.add(addBtn.dataset.add);
        UI.openCart();
      }
      if (detailBtn) {
        const productId = detailBtn.dataset.detail;
        window.location.href = `description.html?id=${encodeURIComponent(productId)}`;
      }
    });
  }

  /* --------------------------------------------------------------------------
     Cart Drawer — Open / Close
     -------------------------------------------------------------------------- */

  document.querySelectorAll("[data-open-cart]").forEach((btn) => {
    btn.addEventListener("click", () => UI.openCart());
  });

  document.querySelectorAll("[data-close-cart]").forEach((btn) => {
    btn.addEventListener("click", () => UI.closeCart());
  });

  /* --------------------------------------------------------------------------
     Product Dialog — Close + Add to Cart
     -------------------------------------------------------------------------- */

  const dialogCloseBtn = document.querySelector("[data-close-dialog]");
  if (dialogCloseBtn) {
    dialogCloseBtn.addEventListener("click", () => UI.closeDialog());
  }

  const dialogAddBtn = document.querySelector("#dialog-add");
  if (dialogAddBtn) {
    dialogAddBtn.addEventListener("click", () => {
      const selected = UI.getSelectedProduct();
      if (selected) {
        Cart.add(selected.id);
        UI.closeDialog();
      }
    });
  }

  /* --------------------------------------------------------------------------
     Cart Items — Quantity + Remove
     -------------------------------------------------------------------------- */

  const cartItemsEl = document.querySelector(".cart-items");
  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", (event) => {
      const qtyBtn = event.target.closest("[data-qty]");
      const removeBtn = event.target.closest("[data-remove]");

      if (qtyBtn) {
        Cart.update(qtyBtn.dataset.qty, Number(qtyBtn.dataset.change));
      }
      if (removeBtn) {
        Cart.remove(removeBtn.dataset.remove);
      }
    });
  }

  /* --------------------------------------------------------------------------
     Mobile Menu Toggle
     -------------------------------------------------------------------------- */

  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => UI.toggleMenu());
  }

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => UI.closeMenu());
  });

  /* --------------------------------------------------------------------------
     Gallery — Lightbox
     -------------------------------------------------------------------------- */

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      UI.openLightbox(item.dataset.image, item.dataset.alt);
    });
  });

  const lightboxCloseBtn = document.querySelector("[data-close-lightbox]");
  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", () => UI.closeLightbox());
  }

  /* --------------------------------------------------------------------------
     Global Keyboard — Escape
     -------------------------------------------------------------------------- */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      UI.closeCart();
      UI.closeLightbox();
    }
  });
})();
