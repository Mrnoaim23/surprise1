// Typewriter effect
const typewriterText = "Aku punya sesuatu yang ingin aku sampaikan padamu...";
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    document.getElementById("typewriter").textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Tampilkan slide dan foto
function revealMessage() {
  document.getElementById("slides").classList.remove("hidden");
  document.getElementById("surprisePhoto").classList.remove("hidden");
  document.getElementById("revealButton").style.display = "none";
}

// Ganti slide
let currentSlide = 0;
function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// Efek love terbang
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  document.querySelector(".love-background").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
