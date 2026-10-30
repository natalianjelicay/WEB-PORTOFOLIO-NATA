// --- 1. EFEK MESIN TIK UNTUK NAMA ---
const nameText = "Natali Anjelica Yoan";
const nameElement = document.getElementById("typed-name"); // Kita buat ID-nya nanti di HTML
let charIndex = 0;

function typeWriter() {
    if (charIndex < nameText.length) {
        nameElement.textContent += nameText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 120); // Kecepatan mengetik (dalam milidetik)
    }
}

// Jalankan efek mesin tik saat halaman dimuat
window.onload = function() {
    if (nameElement) {
        nameElement.textContent = ""; // Kosongkan dulu
        typeWriter();
    }
};


// --- 2. QUOTES BERGANTI-GANTI (YANG SEBELUMNYA) ---
const quotesList = [
    "\"Carilah ilmu hingga ke negeri Cina...\" 🏮",
    "\"Tetap santai bagai Capybara, tetap membara bagai Nailong!\" 🐾",
    "\"Belajar coding hari ini, menguasai dunia esok hari.\" 💻",
    "\"Kreativitas tanpa batas, jiwa yang tenang membawa kemenangan.\" ✨",
    "\"Santai bukan berarti lambat, tapi penuh perhitungan.\" 🍵"
];

let currentIndex = 0;
const quotesElement = document.getElementById("quotes-text");

function changeQuote() {
    quotesElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % quotesList.length;
        quotesElement.textContent = quotesList[currentIndex];
        quotesElement.style.opacity = 1;
    }, 500);
}

setInterval(changeQuote, 4000);

// --- 3. LOGIKA SLIDER "ABOUT ME" ---
let slideIndex = 0;
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".about-slide");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
    if (!track) return;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    // Perbarui titik aktif (dots)
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Kembali ke slide terakhir jika dari awal
    } else if (slideIndex >= slides.length) {
        slideIndex = 0; // Kembali ke slide pertama jika dari akhir
    }
    updateSlider();
}

function currentSlide(index) {
    slideIndex = index;
    updateSlider();
}
// --- 4. LOGIKA 3 MINI GAMES ---

// Game 1: Boba
let scoreBoba = 0;
function gameBoba() {
    scoreBoba += 15;
    document.getElementById("score-1").textContent = "Skor: " + scoreBoba;
    document.getElementById("text-1").textContent = "Nyemmm! Boba manis diterima 🧋💖";
    document.getElementById("mascot-1").textContent = "🐹🧋";
    setTimeout(() => { document.getElementById("mascot-1").textContent = "🐹🍵"; }, 1000);
}

// Game 2: Zen Vibe
const vibes = [
    "Vibe: Super Santai ala Capybara 🌿",
    "Vibe: Semangat Membara ala Nailong 🐲",
    "Vibe: Fokus & Produktif Seharian 💻",
    "Vibe: Damai & Penuh Inspirasi ✨"
];
function gameZen() {
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    document.getElementById("text-2").textContent = randomVibe;
    document.getElementById("mascot-2").textContent = "🧘‍♀️🌸";
    setTimeout(() => { document.getElementById("mascot-2").textContent = "🧘‍♂️✨"; }, 1000);
}

// Game 3: Angpao Hoki
let scoreHoki = 0;
function gameAngpao() {
    scoreHoki += 88;
    document.getElementById("score-3").textContent = "Total Hoki: " + scoreHoki;
    document.getElementById("text-3").textContent = "Hoki besar masuk! Yeay! 🧧💰";
    document.getElementById("mascot-3").textContent = "🐲🎉";
    setTimeout(() => { document.getElementById("mascot-3").textContent = "🐲🧧"; }, 1000);
}