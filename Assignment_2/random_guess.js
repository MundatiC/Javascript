

function Guess(userGuess){
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userGuess == randomNumber) {
    console.log("Good Work!");
    } else {
    console.log("Not matched. The number was " + randomNumber);
    }
}

Guess(9);