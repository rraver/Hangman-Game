var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Cambodia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

var onScreen = [];
var triesLeft = 13;
var usedLetters = [];
var gamesWon = 0;
var gamesLost = 0;
var gameStatus = false;
var wonPhrase ="congrats you won";

var cRandom = countries[Math.floor(Math.random() * countries.length)];
cRandom = cRandom.toLowerCase();
cRandom = cRandom.split("");

for (i=0; i < cRandom.length; i++) {
  if (cRandom[i] === " ") {
    cRandom[i] = "_";
  }
    onScreen.push("_");
}
console.log(cRandom);
console.log(onScreen);
document.write(onScreen.join(" "));

document.onkeyup = function(event) {
  var userInput = event.key;
  userInput = userInput.toLowerCase();
  console.log(userInput);

if (gameStatus === true) {
  var cRandom = countries[Math.floor(Math.random() * countries.length)];
  onScreen = [];
  for (i=0; i < cRandom.length; i++) {
    if (cRandom[i] === " ") {
      cRandom[i] = "_";
    }
      onScreen.push("_");
  }

} else if (gameStatus === false) {
  if (userInput !== usedLetters[i]) {
    for (i=0; i < cRandom.length; i++) {
      if (userInput === cRandom[i]) {
        console.log("hit");
        onScreen[i] = userInput;
        console.log(onScreen);
        var verify = onScreen.join("");
        var verify2 = cRandom.join("");
        console.log(verify);
        console.log(verify2);
        if (onScreen.join("") === cRandom.join("")) {
          var span = document.getElementById("wonPhrase");
          span.textContent = wonPhrase;
          gamesWon++;
        }
      }
      else {
        console.log("not a hit");
        }
        console.log(i);
      }
    usedLetters.push(userInput);
    console.log(usedLetters);
    }
    var span = document.getElementById("onScreen");
    span.textContent = onScreen.join(" ");
    var span = document.getElementById("gamesWon");
    span.textContent = gamesWon;
    gameStatus = true;
  }
console.log(triesLeft);
}
