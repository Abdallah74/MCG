const scroller = document.querySelector(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

const up = document.querySelector(".top");
window.addEventListener("scroll", () => {
  this.scrollY >= 180 ? up.classList.add("show") : up.classList.remove("show");
});

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const bults = document.querySelectorAll(".nav-bults .bult");
const links = document.querySelectorAll(".header .links li a");
function scroll_To(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scroll_To(bults);
scroll_To(links);

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".portfolio .btn");
  const images = document.querySelectorAll(".portfolio .images img");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");

      // Hide all images
      images.forEach(function (image) {
        image.style.display = "none";
      });

      // Show images based on the selected category
      document
        .querySelectorAll(`.images img.${category}`)
        .forEach(function (img) {
          img.style.display = "block";
        });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Display success message
    const successMsg = document.createElement("p");
    successMsg.textContent = "Thanks For Your Message, We'll Get Back to You!";
    successMsg.style.cssText =
      "letter-spacing: 5px; background: -webkit-linear-gradient(120deg, #673183, #e3546b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;"; // Style the message
    form.appendChild(successMsg);

    // Optional: Reset form fields after submission
    form.reset();
  });
});
