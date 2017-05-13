//Arrays for user guesses and alphabet
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Cambodia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var validput = true;
var wordGuess = [];
var usedLetters = [];
//Game metrics
var gamesWon = 0;
var gamesLost = 0;
var gameTries = 13;
var gameStatus = "notplaying";
var gamePhrase ="";
var cRandom = "";
var alreadyUsed = false;
var userGuess = false;

gamePhrase = "You're currently not playing, press any key to start.";
updateData();

//Look for a keypress event
document.onkeyup = function(event) {
  var userInput = event.key;
  userInput = userInput.toLowerCase();
  console.log(userInput);
  console.log(gameStatus);

//If game is not initialized yet, press any key
  if (gameStatus === "notplaying") {
    gamePhrase = "You're now playing, please enter your first letter.";
    updateData();
    gameStatus = "playing";
    newCountry();
    console.log(cRandom);
    }
    //If game is being played start check game
    else if (gameStatus === "playing") {
      //Check to see if letter has been used prior
      if (usedLetters.indexOf(userInput) > -1) {
        alreadyUsed = true;
        console.log("Letter already used");
        console.log("Used status " + alreadyUsed);
        }
      else if (usedLetters.indexOf(userInput) === -1) {
        usedLetters.push(userInput);
        alreadyUsed = true;
        console.log("Letter not used, used letters" + usedLetters);
        console.log("Used status " + alreadyUsed);
        var span = document.getElementById("usedLetters");
        span.textContent = usedLetters;
        }







      if (gameStatus === "playing" & gameTries !== 0) {
        userGuess = false;
        for (i=0; i < cRandom.length; i++) {
          //if user guess is equal to word letter replace screen and mark guess true
          if (userInput === cRandom[i]) {
            wordGuess[i] = userInput;
            userGuess = true;
            //if country is equal to user guesses mark game as won and reset
            if (wordGuess.join("") === cRandom.join("")) {
              gamePhrase = "Congratuations you've won, we started another game for you";
              var span = document.getElementById("gamePhrase");
              span.textContent = gamePhrase;
              gamesWon++;
              gameReset();
            }
          }
        }
        if (userGuess === false) {
          gameTries--;
          console.log("not a hit");
          console.log(gameTries);
        }
      console.log(usedLetters);
      }
    //Check to see if there's any tries left, if so reset
    if (gameTries === 0) {
      gamesLost++;
      gamePhrase = "Sorry, you've lost we've started a new game for you though";
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
  gameStatus = "playing";
}

function updateData() {
  var span = document.getElementById("gamePhrase");
  span.textContent = gamePhrase;
  var span = document.getElementById("gamesWon");
  span.textContent = gamesWon;
  var span = document.getElementById("gamesLost");
  span.textContent = gamesLost;
}


function gameReset() {
  newCountry();
  gameTries = 13;
  usedLetters = [];
}


var span = document.getElementById("gamePhrase");
span.textContent = gamePhrase;
