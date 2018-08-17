// Set variables first
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.push(userGuess);

    // user guesses correctly //
    if (userGuess == computerGuess) {
        wins++;
        alert('You\'ve guessed corrrectly. You Win!');
        guessesLeft = 5;
        guessesSoFar.length = 0;
    }

    // users guesses incorrectly //
    else if (guessesLeft == 0) {
        losses++;
        alert('You lost. Let\'s try again.');
        guessesLeft = 5;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    
    // Display score HTML    
    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " +
        wins +
        "</p>" +
        "<p>Total Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;

    // Placing the html into the #game
    document.querySelector('#game').innerHTML = html;
}