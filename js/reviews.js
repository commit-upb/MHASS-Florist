const googleMapsLocation = "Jl. Ronggowarsito, Legok Kidul, Pejagoan, Kec. Pejagoan, Kabupaten Kebumen, Jawa Tengah 54361";

const googleReviewStats = {
    stars: {
        5: 19,
        4: 1,
        3: 1,
        2: 0,
        1: 6
    }
};

const reviewComments = [];

const reviewsList = document.querySelector("#reviews-list");
const googleReviewsLink = document.querySelector("#google-reviews-link");


function renderReviewSummary() {

    const totalReviews =
        googleReviewStats.stars[5] +
        googleReviewStats.stars[4] +
        googleReviewStats.stars[3] +
        googleReviewStats.stars[2] +
        googleReviewStats.stars[1];

    const rating =
        (
            (5 * googleReviewStats.stars[5]) +
            (4 * googleReviewStats.stars[4]) +
            (3 * googleReviewStats.stars[3]) +
            (2 * googleReviewStats.stars[2]) +
            (1 * googleReviewStats.stars[1])
        ) / totalReviews;

    document.querySelector("#reviews-score").textContent =
        rating.toFixed(1);

    document.querySelector("#reviews-total").textContent =
        totalReviews;

    [1, 2, 3, 4, 5].forEach((ratingNumber) => {

        const count = googleReviewStats.stars[ratingNumber];

        const percentage =
            totalReviews > 0
                ? Math.round((count / totalReviews) * 100)
                : 0;

        document.querySelector(`#bar-${ratingNumber}`).style.width =
            `${percentage}%`;

        document.querySelector(`#percent-${ratingNumber}`).textContent =
            `${percentage}%`;
    });
}


if (googleReviewsLink) {
    googleReviewsLink.href =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleMapsLocation)}`;
}


renderReviewSummary();