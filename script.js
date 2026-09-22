```javascript
const pages = [
    document.getElementById("hero"),
    document.getElementById("message"),
    document.getElementById("final")
];

const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const wishMessage = document.getElementById("wishMessage");

const dots = document.querySelectorAll(".progress-dot");

let currentPage = 0;


// -------------------------
// Change page
// -------------------------

function goToPage(index) {

    if (index < 0 || index >= pages.length) return;

    pages[currentPage].classList.remove("active");

    currentPage = index;

    setTimeout(() => {
        pages[currentPage].classList.add("active");
    }, 120);

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentPage);
    });
}


// -------------------------
// Button feedback
// -------------------------

function buttonFeedback(button) {

    button.classList.remove("clicked");

    void button.offsetWidth;

    button.classList.add("clicked");

    createSparkles(button);
}


// -------------------------
// Sparkles around button
// -------------------------

function createSparkles(button) {

    const rect = button.getBoundingClientRect();

    const symbols = ["✦", "·", "✧"];

    for (let i = 0; i < 7; i++) {

        const spark = document.createElement("span");

        spark.className = "spark";

        spark.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        spark.style.left =
            rect.left + rect.width / 2 + "px";

        spark.style.top =
            rect.top + rect.height / 2 + "px";

        spark.style.setProperty(
            "--x",
            `${(Math.random() - .5) * 130}px`
        );

        spark.style.setProperty(
            "--y",
            `${(Math.random() - .5) * 90}px`
        );

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 900);
    }
}


// -------------------------
// Open surprise
// -------------------------

openBtn.addEventListener("click", () => {

    buttonFeedback(openBtn);

    setTimeout(() => {
        goToPage(1);
    }, 280);
});


// -------------------------
// Continue
// -------------------------

continueBtn.addEventListener("click", () => {

    buttonFeedback(continueBtn);

    setTimeout(() => {
        goToPage(2);
    }, 280);
});


// -------------------------
// Make a wish
// -------------------------

celebrateBtn.addEventListener("click", () => {

    buttonFeedback(celebrateBtn);

    wishMessage.classList.add("show");

    celebrate();
});


// -------------------------
// Final celebration
// -------------------------

function celebrate() {

    const symbols = ["✦", "✧", "·", "✦"];

    for (let i = 0; i < 24; i++) {

        const item = document.createElement("span");

        item.className = "celebration";

        item.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top =
            "-20px";

        item.style.fontSize =
            10 + Math.random() * 18 + "px";

        item.style.animationDelay =
            Math.random() * .8 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 3500);
    }
});
```
