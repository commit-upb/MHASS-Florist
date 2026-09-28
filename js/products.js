window.addEventListener("mhas:pages-ready", () => {
    const categoryButtons = document.querySelectorAll(".category-list button");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {

            categoryButtons.forEach((button) => {
                button.classList.remove("active");
            })

            button.classList.add("active")
        });
    });
});