/* =========================================================
   ❤️ CUSTOMIZE YOUR BIRTHDAY WEBSITE HERE
========================================================= */
const birthdayData = {
    girlfriendName: "Prithvika A",
    yourName: "Manoj",
    birthdayDate: "25 september",
    songTitle: "Special Song",
    songArtist: "A song that reminds me of you",
    loveLetter: `
There are so many things I could say today,
but somehow words never feel enough when
I'm trying to explain how special you are to me.

You have brought so many beautiful moments
into my life, and every memory with you is
something I want to keep forever.

Your smile, your laugh, your little habits,
your kindness, and even the silly moments
we share have become some of my favorite
parts of life.

On your birthday, I just want you to know
that you are incredibly special to me.

I hope this new year of your life brings you
everything your heart wishes for.

Keep smiling.
Keep being the amazing person you are.

Happy Birthday, my love. ❤️
`,
    photoCaptions: [
        "One of my favorite memories with you ❤️",
        "A moment I'll always remember 💕",
        "You + me = my favorite combination 🥰",
        "Another beautiful memory ✨",
        "This smile deserves its own gallery ❤️",
        "A moment worth keeping forever 💗",
        "One picture, a thousand memories 🥹",
        "And hopefully many more memories to come ❤️"
    ]
};

const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");
const openSurprise = document.getElementById("openSurprise");
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const musicPlayButton = document.getElementById("musicPlayButton");
const vinyl = document.querySelector(".vinyl");

document.getElementById("openingName").textContent = birthdayData.girlfriendName;
document.getElementById("heroName").textContent = birthdayData.girlfriendName;
document.getElementById("finalName").textContent = birthdayData.girlfriendName;

document.getElementById("yourName").textContent = birthdayData.yourName;
document.getElementById("finalYourName").textContent = birthdayData.yourName;
document.getElementById("birthdayDate").textContent = "🎂 " + birthdayData.birthdayDate + " 🎂";
document.getElementById("songTitle").textContent = birthdayData.songTitle;
document.getElementById("songArtist").textContent = birthdayData.songArtist;

openSurprise.addEventListener("click", function () {
    openingScreen.classList.add("hide");
    mainContent.classList.remove("hidden");
    document.body.style.overflow = "auto";
    setTimeout(typeLoveLetter, 1000);
    bgMusic.volume = 0.35;
    bgMusic.play().then(() => {
        musicButton.textContent = "🔊";
        vinyl.classList.add("playing");
        musicPlayButton.textContent = "⏸ Pause Song";
    }).catch(() => musicButton.textContent = "🎵");
});

musicButton.addEventListener("click", toggleMusic);
musicPlayButton.addEventListener("click", toggleMusic);
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    // Change these to whatever you want
    const correctUsername = "bittu";
    const correctPassword = "2511";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginScreen").style.display = "none";
        document.body.classList.add("opened");
    } else {
        error.textContent = "Hmm... this surprise isn't for you 😌❤️";
    }
}

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicButton.textContent = "🔊";
            musicPlayButton.textContent = "⏸ Pause Song";
            vinyl.classList.add("playing");
        }).catch(() => alert("Please make sure music/birthday-song.mp3 exists."));
    } else {
        bgMusic.pause();
        musicButton.textContent = "🎵";
        musicPlayButton.textContent = "▶ Play Song";
        vinyl.classList.remove("playing");
    }
}

const heartContainer = document.getElementById("heart-container");
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    const hearts = ["❤️","💕","💗","💖","💓","💘","✨"];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 12 + Math.random() * 22 + "px";
    heart.style.animationDuration = 6 + Math.random() * 7 + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 14000);
}
setInterval(createHeart, 800);

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({behavior:"smooth"});
}

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

function openPhoto(number) {
    modalImage.src = "photos/photo" + number + ".jpg";
    modalCaption.textContent = birthdayData.photoCaptions[number - 1];
    photoModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
function closePhoto() {
    photoModal.classList.remove("active");
    document.body.style.overflow = "auto";
}
photoModal.addEventListener("click", e => {
    if (e.target === photoModal) closePhoto();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePhoto();
});

let letterStarted = false;
function typeLoveLetter() {
    if (letterStarted) return;
    letterStarted = true;
    const letter = document.getElementById("loveLetter");
    const text = birthdayData.loveLetter.trim();
    let index = 0;
    letter.textContent = "";
    function type() {
        if (index < text.length) {
            letter.textContent += text.charAt(index++);
            setTimeout(type, 18);
        }
    }
    type();
}

const blowCandles = document.getElementById("blowCandles");
const wishMessage = document.getElementById("wishMessage");
blowCandles.addEventListener("click", function () {
    document.querySelectorAll(".flame").forEach(flame => flame.classList.add("off"));
    blowCandles.textContent = "Wish Made! ✨❤️";
    wishMessage.classList.remove("hidden");
    createConfetti();
});

function createConfetti() {
    const colors = ["#ff4f81","#ff8fab","#8b5cf6","#ffd166","#ffffff"];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "12px";
        confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.zIndex = "2000";
        confetti.style.pointerEvents = "none";
        confetti.style.borderRadius = "2px";
        document.body.appendChild(confetti);
        const duration = 2 + Math.random()*3;
        const rotation = Math.random()*1000;
        confetti.animate([
            {transform:"translateY(0) rotate(0deg)",opacity:1},
            {transform:`translateY(110vh) rotate(${rotation}deg)`,opacity:0}
        ], {duration:duration*1000,easing:"cubic-bezier(.2,.8,.3,1)"});
        setTimeout(() => confetti.remove(), duration*1000);
    }
}

const lastSurprise = document.getElementById("lastSurprise");
const hiddenMessage = document.getElementById("hiddenMessage");
lastSurprise.addEventListener("click", function () {
    hiddenMessage.classList.remove("hidden");
    lastSurprise.style.display = "none";
    createConfetti();
    createHeartExplosion();
    setTimeout(() => hiddenMessage.scrollIntoView({behavior:"smooth",block:"center"}), 300);
});

function createHeartExplosion() {
    const hearts = ["❤️","💖","💕","💗","💓","💘","🥰"];
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.textContent = hearts[Math.floor(Math.random()*hearts.length)];
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.zIndex = "2000";
        heart.style.fontSize = 15 + Math.random()*25 + "px";
        heart.style.pointerEvents = "none";
        const angle = Math.random()*Math.PI*2;
        const distance = 150 + Math.random()*400;
        const x = Math.cos(angle)*distance;
        const y = Math.sin(angle)*distance;
        heart.animate([
            {transform:"translate(-50%,-50%) scale(0)",opacity:1},
            {transform:`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) scale(1.3)`,opacity:0}
        ], {duration:1500+Math.random()*1000,easing:"cubic-bezier(.2,.8,.3,1)"});
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2500);
    }
}

const revealElements = document.querySelectorAll(".timeline-item,.photo-card,.reason-card");
revealElements.forEach(element => element.classList.add("reveal"));
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, {threshold:.15});
revealElements.forEach(element => revealObserver.observe(element));

document.body.style.overflow = "hidden";
console.log("❤️ Birthday surprise website loaded!");
