// Scrolling functionality
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
});

// Popup functionality
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");

// Open popup when any image is clicked
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImage.src = img.src; // Set the popup image source to the clicked image
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Optional: Close the popup when clicking outside the image
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
