// Efek mesin ketik
const typewriterText = "Aku punya sesuatu yang ingin aku sampaikan padamu...tapiiii bacanya pelan-pelan aja sambil dengar musiknya";
let i = 0;

function typeWriter() {

  if (i < typewriterText.length) {
    document.getElementById("typewriter").textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();
function revealMessage() {
  const music = document.getElementById("bgMusic");
  music.play().catch(e => console.warn("Gagal play musik:", e));
  document.getElementById("slides").classList.remove("hidden");
  document.getElementById("surprisePhoto").classList.remove("hidden");
  document.getElementById("revealButton").style.display = "none";
   document.getElementById("introWrapper").style.minHeight = "auto";
      document.getElementById("introWrapper").style.alignItems = "flex-start";
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
