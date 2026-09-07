/* ==========================================================================
   UI — Dialog, lightbox, menu toggle, header scroll, smooth anchors
   ========================================================================== */

const UI = (() => {
  /* --------------------------------------------------------------------------
     DOM References
     -------------------------------------------------------------------------- */

  const cartDrawer = document.querySelector(".cart-drawer");
  const overlay = document.querySelector(".drawer-overlay");
  const productDialog = document.querySelector(".product-dialog");
  const lightbox = document.querySelector(".lightbox");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const header = document.querySelector(".site-header");

  let selectedProduct = null;

  /* --------------------------------------------------------------------------
     Body Scroll Lock
     -------------------------------------------------------------------------- */

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    const dialogOpen = productDialog && productDialog.open;
    const lightboxOpen = lightbox && lightbox.classList.contains("is-open");
    const drawerOpen = cartDrawer && cartDrawer.classList.contains("is-open");
    if (!dialogOpen && !lightboxOpen && !drawerOpen) {
      document.body.style.overflow = "";
    }
  }

  /* --------------------------------------------------------------------------
     Cart Drawer
     -------------------------------------------------------------------------- */

  function openCart() {
    if (!cartDrawer || !overlay) return;
    cartDrawer.classList.add("is-open");
    overlay.classList.add("is-open");
    cartDrawer.setAttribute("aria-hidden", "false");
    lockScroll();
  }

  function closeCart() {
    if (!cartDrawer || !overlay) return;
    cartDrawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
    unlockScroll();
  }

  /* --------------------------------------------------------------------------
     Product Dialog
     -------------------------------------------------------------------------- */

  function openDialog(id) {
    if (!productDialog) return;
    selectedProduct = PRODUCTS.find((p) => p.id === id);
    if (!selectedProduct) return;

    const img = productDialog.querySelector("#dialog-image");
    const title = productDialog.querySelector("#dialog-title");
    const desc = productDialog.querySelector("#dialog-description");

    if (img) {
      img.src = selectedProduct.image;
      img.alt = selectedProduct.name;
    }
    if (title) title.textContent = selectedProduct.name;
    if (desc) desc.textContent = selectedProduct.description;

    productDialog.showModal();
    lockScroll();
  }

  function closeDialog() {
    if (!productDialog) return;
    productDialog.close();
    unlockScroll();
  }

  function getSelectedProduct() {
    return selectedProduct;
  }

  /* --------------------------------------------------------------------------
     Lightbox
     -------------------------------------------------------------------------- */

  function openLightbox(imageSrc, imageAlt) {
    if (!lightbox) return;
    const img = lightbox.querySelector("img");
    if (img) {
      img.src = imageSrc;
      img.alt = imageAlt;
    }
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lockScroll();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    unlockScroll();
  }

  /* --------------------------------------------------------------------------
     Mobile Menu
     -------------------------------------------------------------------------- */

  function toggleMenu() {
    if (!navMenu || !menuToggle) return;
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  /* --------------------------------------------------------------------------
     Header Scroll Shadow
     -------------------------------------------------------------------------- */

  function initScrollShadow() {
    if (!header) return;
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            header.style.boxShadow = "0 2px 12px rgba(16, 43, 76, 0.08)";
          } else {
            header.style.boxShadow = "none";
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* --------------------------------------------------------------------------
     Smooth Anchor Links
     -------------------------------------------------------------------------- */

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Init
     -------------------------------------------------------------------------- */

  function init() {
    initScrollShadow();
    initSmoothAnchors();
  }

  return {
    openCart,
    closeCart,
    openDialog,
    closeDialog,
    getSelectedProduct,
    openLightbox,
    closeLightbox,
    toggleMenu,
    closeMenu,
    init,
  };
})();
