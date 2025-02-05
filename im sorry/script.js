const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Ashi please...",
    "Just think about it!",
    "mang-aaway pa tayo ng bulldogs",
    "bati na plsss...",
    "sorry na pretty..",
    "ayaw mo ba> :((..",
    "Just kidding, bati na us ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}