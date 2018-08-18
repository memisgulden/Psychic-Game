// Set variables first
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {
//set to lower case//    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.push(userGuess);

    // user guesses correctly //
    if (userGuess == computerGuess) {
        wins++;
        alert("You guessed corrrectly. You Win!");
        guessesLeft = 5;
        guessesSoFar.length = 0;
    }

    // users guesses incorrectly //
    else if (guessesLeft == 0) {
        losses++;
        alert("You lost. Try again.");
        guessesLeft = 8;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    
    // Setting HTML variable to the score line by line //  
    var html = 
    
        "<h1> The Psychic Game </h1>" +
        
        "<h4> Guess what letter I'm thinking of! </h4>" +
        
        "<p> Total Wins: " + wins + "</p>" +
        
        "<p>Total Losses: " + losses + "</p>" +
        
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        
        "<p>Guesses So Far: " + guessesSoFar + "</p>";

    
    //in the #game take the variable HTML and display it //    
    document.querySelector('#game').innerHTML = html;
}