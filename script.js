// Initial Flashcards
let flashcards = [
    {q: "What is HTML?", a: "HTML stands for HyperText Markup Language."},
    {q: "What is CSS?", a: "CSS is used for styling webpages."},
    {q: "What is JavaScript?", a: "JavaScript adds interactivity to webpages."}
];

let index = 0;

// UI elements
const cardInner = document.getElementById("cardInner");
const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");

function loadCard() {
    questionBox.innerText = flashcards[index].q;
    answerBox.innerText = flashcards[index].a;
    cardInner.classList.remove("flip");
}

function flipCard() {
    cardInner.classList.toggle("flip");
}

function nextCard() {
    index = (index + 1) % flashcards.length;
    loadCard();
}

function prevCard() {
    index = (index - 1 + flashcards.length) % flashcards.length;
    loadCard();
}

function addCard() {
    const q = document.getElementById("newQuestion").value.trim();
    const a = document.getElementById("newAnswer").value.trim();
    if (!q || !a) {
        alert("Please fill both question and answer!");
        return;
    }
    flashcards.push({q,a});
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
    index = flashcards.length - 1;
    loadCard();
    alert("Flashcard added!");
}

// Initialize
loadCard();
