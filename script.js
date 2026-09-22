// =========================
// GET ELEMENTS
// =========================

const setupScreen = document.getElementById("setupScreen");
const surpriseScreen = document.getElementById("surpriseScreen");

const senderName = document.getElementById("senderName");
const receiverName = document.getElementById("receiverName");
const customMessage = document.getElementById("customMessage");

const createButton = document.getElementById("createButton");

const linkBox = document.getElementById("linkBox");
const generatedLink = document.getElementById("generatedLink");
const copyButton = document.getElementById("copyButton");

const displayName = document.getElementById("displayName");
const birthdayName = document.getElementById("birthdayName");
const finalName = document.getElementById("finalName");

const displayMessage = document.getElementById("displayMessage");

const senderSection = document.getElementById("senderSection");
const displaySender = document.getElementById("displaySender");

const openButton = document.getElementById("openButton");
const continueButton = document.getElementById("continueButton");

const birthdaySection = document.getElementById("birthdaySection");
const finalSection = document.getElementById("finalSection");


// =========================
// CHECK URL
// =========================

const urlParams = new URLSearchParams(window.location.search);

const urlSender = urlParams.get("from");
const urlReceiver = urlParams.get("to");
const urlMessage = urlParams.get("message");


// =========================
// IF B OPENS THE LINK
// =========================

if (urlReceiver) {

    const receiver = urlReceiver;
    const sender = urlSender || "";
    const message = urlMessage || "Wishing you a beautiful and memorable day! ✨";


    displayName.textContent = receiver;
    birthdayName.textContent = receiver;
    finalName.textContent = receiver;

    displayMessage.textContent = message;


    if (sender) {

        displaySender.textContent = sender;
        senderSection.style.display = "block";

    } else {

        senderSection.style.display = "none";

    }


    // Hide setup

    setupScreen.style.display = "none";

    // Show surprise

    surpriseScreen.style.display = "block";

}


// =========================
// CREATE SURPRISE
// =========================

createButton.addEventListener("click", function () {

    const sender = senderName.value.trim();
    const receiver = receiverName.value.trim();
    const message = customMessage.value.trim();


    // Check names

    if (sender === "") {

        senderName.focus();

        senderName.style.borderColor = "#d99";

        return;
    }


    if (receiver === "") {

        receiverName.focus();

        receiverName.style.borderColor = "#d99";

        return;
    }


    // Default message

    const finalMessage =
        message ||
        "Wishing you a beautiful and memorable day! ✨";


    // =========================
    // CREATE URL
    // =========================

    const baseURL =
        window.location.origin +
        window.location.pathname;


    const surpriseURL =
        baseURL +
        "?from=" + encodeURIComponent(sender) +
        "&to=" + encodeURIComponent(receiver) +
        "&message=" + encodeURIComponent(finalMessage);


    // Put URL in box

    generatedLink.value = surpriseURL;

    linkBox.style.display = "block";


    // Scroll to link

    linkBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// =========================
// COPY LINK
// =========================

copyButton.addEventListener("click", async function () {

    try {

        await navigator.clipboard.writeText(
            generatedLink.value
        );

        copyButton.textContent = "Copied ✓";

        setTimeout(function () {

            copyButton.textContent = "Copy";

        }, 2000);

    } catch (error) {

        generatedLink.select();
        document.execCommand("copy");

        copyButton.textContent = "Copied ✓";

        setTimeout(function () {

            copyButton.textContent = "Copy";

        }, 2000);

    }

});


// =========================
// OPEN SURPRISE
// =========================

openButton.addEventListener("click", function () {

    birthdaySection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// =========================
// FINAL SURPRISE
// =========================

continueButton.addEventListener("click", function () {

    finalSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
