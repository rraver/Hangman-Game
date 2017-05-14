//Arrays for user guesses and alphabet
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Cambodia", "Comoros", "Congo", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Ecuador", "Egypt", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia", "Somalia", "Spain", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "England", "America", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Game words, input, and phrases
var gamePhrase ="";
var cRandom = "";
var wordGuess = [];
var usedLetters = [];
//Game metrics
var gamesWon = 0;
var gamesLost = 0;
var gameTries = 13;
var alreadyUsed = false;
var userGuess = false;
var validChar = true;

gamePhrase = "You're playing hangman, please enter your first letter.";
gameReset();

//Look for a keypress event
document.onkeyup = function(event) {
  var userInput = event.key;
  userInput = userInput.toLowerCase();
  //Check to see if user hits a letter
  if (alphabet.indexOf(userInput) > -1) {
    validChar = true;
    updateData();
    }
  else if (alphabet.indexOf(userInput === -1)) {
    validChar = false;
    gamePhrase = "You entered a invalid key, please select a letter.";
    updateData();
    }
    //Check to see if letter has been used prior
    if (usedLetters.indexOf(userInput) > -1 && validChar === true) {
      //If already used set status to true
      alreadyUsed = true;
      gamePhrase ="You already used that letter, try again.";
      updateData();
      }
    else if (usedLetters.indexOf(userInput) === -1 && validChar === true) {
      //If not used record the key into the array
      usedLetters.push(userInput);
      alreadyUsed = false;
      updateData();
      //If you have turns left and above conditions are met check game match
      if (gameTries !== 0 && alreadyUsed === false && validChar === true) {
        //for loop to iterate over each letter of random selection
        for (i=0; i < cRandom.length; i++) {
          //if user guess is equal to word letter replace screen and mark guess true
          if (userInput === cRandom[i]) {
            wordGuess[i] = userInput;
            userGuess = true;
            gamePhrase ="You guessed a letter in the word, keep on guessing.";
            updateData();
            //if country is equal to user guesses mark game as won and reset
            if (wordGuess.join("") === cRandom.join("")) {
              gamePhrase = "Congratuations you've won, we started another game for you";
              updateData();
              gamesWon++;
              gameReset();
            }
          }
        }
        //Takes a try off if you
        if (userGuess === false) {
          gameTries--;
          gamePhrase ="You did not guess a letter in the word, try again.";
          updateData();
        }
      }

    //Check to see if there's any tries left, if so reset
    if (gameTries === 0) {
      gamesLost++;
      gamePhrase = "Sorry, you've lost we've started a new game for you though.  The answer was " + cRandom.join("") + ".";
      var span = document.getElementById("gamePhrase");
      span.textContent = gamePhrase;
      gameReset();
    }

    var span = document.getElementById("wordGuess");
    span.textContent = wordGuess.join(" ");
    var span = document.getElementById("gamesWon");
    span.textContent = gamesWon;
    var span = document.getElementById("gamesLost");
    span.textContent = gamesLost;
    console.log(cRandom);

  }


console.log(gameTries);
alreadyUsed = false;
validChar = true;
userGuess = false;
}





function newCountry() {
  cRandom = countries[Math.floor(Math.random() * countries.length)];
  cRandom = cRandom.toLowerCase();
  cRandom = cRandom.split("");
  wordGuess = [];
  for (i=0; i < cRandom.length; i++) {
    if (cRandom[i] === " ") {
       cRandom[i] = "_";
     }
  wordGuess.push("_");
  }
}

function updateData() {
  var span = document.getElementById("gamePhrase");
  span.textContent = gamePhrase;
  var span = document.getElementById("gamesWon");
  span.textContent = gamesWon;
  var span = document.getElementById("gamesLost");
  span.textContent = gamesLost;
  var span = document.getElementById("gameTries");
  span.textContent = gameTries;
  var span = document.getElementById("usedLetters");
  span.textContent = usedLetters;
  var span = document.getElementById("wordGuess");
  span.textContent = wordGuess.join(" ");
}


function gameReset() {
  newCountry();
  gameTries = 13;
  usedLetters = [];
  updateData();
}


var span = document.getElementById("gamePhrase");
span.textContent = gamePhrase;
