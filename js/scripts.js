/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// Game Data: Some example teams for random selection
const teams = [
    { team1: "Real Madrid", team2: "Barcelona" },
    { team1: "Manchester United", team2: "Liverpool" },
    { team1: "Bayern Munich", team2: "Borussia Dortmund" },
    { team1: "Juventus", team2: "AC Milan" },
    { team1: "PSG", team2: "Marseille" }
];

// Select a random match
let currentMatch = teams[Math.floor(Math.random() * teams.length)];
document.getElementById("team1-name").textContent = currentMatch.team1;
document.getElementById("team2-name").textContent = currentMatch.team2;

// Variables to track the user’s guess and the actual result
let userGuess = "";
let actualResult = "";

// Function to generate the actual result randomly (win, lose, draw)
function generateResult() {
    const outcomes = ["win", "lose", "draw"];
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];
    return result;
}

// Function to handle user's guess
function submitGuess(guess) {
    userGuess = guess;
    actualResult = generateResult();

    // Display user's guess
    document.getElementById("guess-result").textContent = `You guessed: ${userGuess}`;

    // Display actual result
    let matchResultText = "";
    if (userGuess === actualResult) {
        matchResultText = "You were right!";
    } else {
        matchResultText = "You were wrong.";
    }

    document.getElementById("actual-result").textContent = `Actual result: ${actualResult.charAt(0).toUpperCase() + actualResult.slice(1)}`;
    document.getElementById("guess-result").style.color = userGuess === actualResult ? "green" : "red";
    document.getElementById("actual-result").style.color = userGuess === actualResult ? "green" : "red";
}

// Reset the game for a new match (optional)
function resetGame() {
    currentMatch = teams[Math.floor(Math.random() * teams.length)];
    document.getElementById("team1-name").textContent = currentMatch.team1;
    document.getElementById("team2-name").textContent = currentMatch.team2;
    document.getElementById("guess-result").textContent = "";
    document.getElementById("actual-result").textContent = "";
}
