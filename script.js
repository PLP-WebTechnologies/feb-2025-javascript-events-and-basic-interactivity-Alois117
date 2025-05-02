// Change Text on Button Click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("dynamicText").textContent = "You clicked the button!";
});

// Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#81c784";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#ffe082";
});

// Keypress Detection
document.addEventListener("keypress", (e) => {
  document.getElementById("keyMessage").textContent = `You pressed "${e.key}"`;
});

// Image Slider
const imageUrls = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];
let currentImage = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % imageUrls.length;
  document.getElementById("sliderImage").src = imageUrls[currentImage];
});

// Accordion
const accordionHeader = document.querySelector(".accordion-header");
const accordionContent = document.querySelector(".accordion-content");

accordionHeader.addEventListener("click", () => {
  accordionContent.style.display =
    accordionContent.style.display === "block" ? "none" : "block";
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    e.preventDefault();
    document.getElementById("passwordFeedback").textContent =
      "Password must be at least 8 characters long.";
  }
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function () {
  const val = this.value;
  const feedback = document.getElementById("passwordFeedback");
  if (val.length < 8) {
    feedback.textContent = "Too short!";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "green";
  }
});
