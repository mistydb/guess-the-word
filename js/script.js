// select the unordered list where guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
// "Guess!" button
const guessButton = document.querySelector(".guess");
// text input box
const textInput = document.querySelector(".letter");
// where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// where remaing guesses display
const guessesRemaining = document.querySelector(".remaining");
// span for actual number of remaining guesses
const numGuesses = document.querySelector("span");
// message responses after a guessed letter
const message = document.querySelector(".message");
// play again button
const playAgain = document.querySelector(".play-again");
// test word until later when a list of words is fetched
const word = "magnolia";

const hideWord = function (word) {
    const arrayWord = word.split("");
    const hiddenWord = arrayWord.map(function (item) {
        return `●`;
    })
    wordInProgress.innerText = hiddenWord.join("");
};

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const letterGuess = textInput.value;
    console.log(letterGuess);
    textInput.value = "";
});

hideWord(word);