```javascript
// ================================
// Birthday Surprise - JavaScript
// ================================

const welcomeScreen = document.getElementById("welcomeScreen");
const messageScreen = document.getElementById("messageScreen");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const celebrationArea = document.getElementById("celebrationArea");


// -------------------------------
// Smooth screen change
// -------------------------------

function showScreen(currentScreen, nextScreen) {

    currentScreen.classList.remove("active");

    setTimeout(() => {
        nextScreen.classList.add("active");
    }, 350);
}


// -------------------------------
// Button click effect
// -------------------------------

function buttonEffect(button) {

    button.classList.remove("clicked");

    // Restart animation every click
    void button.offsetWidth;

    button.classList.add("clicked");

    createSparkles(button);
}


// -------------------------------
// Small sparkle effect
// -------------------------------

function createSparkles(button) {

    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "click-sparkle";

        sparkle.innerHTML = "✦";

        sparkle.style.left =
            rect.left + rect.width / 2 + "px";

        sparkle.style.top =
            rect.top + rect.height / 2 + "px";

        sparkle.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 140}px`
        );

        sparkle.style.setProperty(
            "--y",
            `${(Math.random() - 0.5) * 100}px`
        );

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 900);
    }
}


// -------------------------------
// First button
// -------------------------------

startBtn.addEventListener("click", () => {

    buttonEffect(startBtn);

    setTimeout(() => {
        showScreen(welcomeScreen, messageScreen);
    }, 300);
});


// -------------------------------
// Second button
// -------------------------------

nextBtn.addEventListener("click", () => {

    buttonEffect(nextBtn);

    setTimeout(() => {
        showScreen(messageScreen, finalScreen);
    }, 300);
});


// -------------------------------
// Final celebration
// -------------------------------

celebrateBtn.addEventListener("click", () => {

    buttonEffect(celebrateBtn);

    celebrateBtn.innerHTML = "Happy Birthday! 🎉";

    createCelebration();
});


// -------------------------------
// Celebration particles
// -------------------------------

function createCelebration() {

    const symbols = [
        "✨",
        "🎉",
        "💫",
        "⭐",
        "🎈",
        "💖"
    ];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "celebration-particle";

        particle.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDelay =
            Math.random() * 0.8 + "s";

        particle.style.fontSize =
            14 + Math.random() * 18 + "px";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3500);
    }
}
```
