// Efek mesin ketik
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

// Tampilkan pesan & foto
function revealMessage() {
  document.getElementById("slides").classList.remove("hidden");
  document.getElementById("surprisePhoto").classList.remove("hidden");
  document.getElementById("revealButton").style.display = "none";
}

// Slide kalimat panjang
let currentSlide = 0;
function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// Efek hati terbang
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.querySelector(".love-background").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
