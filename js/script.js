// Smooth welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Pet Adoption Shelter Portal!");
});

// Search Button
const searchBtn = document.querySelector(".search button");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {

        const searchInput = document.querySelector(".search input").value;

        if (searchInput.trim() === "") {
            alert("Please enter a pet name or breed.");
        } else {
            alert("Searching for: " + searchInput);
        }

    });
}

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0px) scale(1)";
    });

});