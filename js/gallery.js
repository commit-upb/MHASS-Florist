(function () {
  "use strict";

  UI.init();

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      UI.openLightbox(item.dataset.image, item.dataset.alt);
    });
  });

  const closeButton = document.querySelector("[data-close-lightbox]");
  if (closeButton) {
    closeButton.addEventListener("click", () => UI.closeLightbox());
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") UI.closeLightbox();
  });
})();
