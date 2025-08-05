// Typing animation
const text = "Data Analyst | SQL Enthusiast | Python Developer";
let index = 0;

function type() {
  const element = document.getElementById("typing-animation");
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
