document.addEventListener("click", function (event) {

    const question = event.target.closest(".faq-question");

    if (!question) return;

    const item = question.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    const isOpen =
        question.getAttribute("aria-expanded") === "true";

    question.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );

    answer.hidden = isOpen;

    icon.textContent = isOpen ? "+" : "×";
});