const ratingSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thank-you-section");

const rating = document.querySelector(".rating");
const rate = document.querySelector(".selected span");

const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".btn-submit");
const submitAgain = document.querySelector(".btn-again");

// main submit button
submit.addEventListener("click", () => {
    thankSection.classList.remove("hidden");
    ratingSection.style.display = "none";
});

// button to submit again (bonus)
submitAgain.addEventListener("click", () => {
    thankSection.classList.add("hidden");
    ratingSection.style.display = "block";
});

rating.addEventListener("click", function (e) {
    // use event delegation to add ative
    if (e.target.tagName === "BUTTON") {
        // remove all active buttons on click;
        btn.forEach((b) => b.classList.remove("active"));

        e.target.classList.add("active");
        rate.innerText = e.target.innerText;
    }
});
