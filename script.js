

const colorButton = document.getElementById("colorButton");
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

// Change the background color
colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "violet";
});

// Show or hide the message
messageButton.addEventListener("click", function () {
    if (message.hidden) {
        message.hidden = false;
        messageButton.textContent = "Hide Message";
    } else {
        message.hidden = true;
        messageButton.textContent = "Show Message";
    }
});
