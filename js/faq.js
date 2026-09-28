document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        question.addEventListener("click", function () {
            const isOpen = question.getAttribute("aria-expanded") === "true";

            question.setAttribute("aria-expanded", !isOpen);
            answer.hidden = isOpen;

            icon.textContent = isOpen ? "+" : "×";
        });
    });
});