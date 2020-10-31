// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordChar = {
    
  lowerAlpha: ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
  "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
  upperAlpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  specialChar: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", 
  ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "^", "_", "|", "~", "{", "}", "[", "]"]

}

function generatePassword() {
  var chooseLower = confirm("Would you like the password to contain lowercase letters?");
  var chooseUpper = confirm("Would you like the password to contain uppercase letters?");
  var chooseNumbers = confirm("Would you like the password to contain numbers?");
  var chooseSpecial = confirm("Would you like the password to contain special characters?");
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");

  console.log(passwordLength);
  console.log(typeof passwordLength)
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  console.log(typeof passwordLength);

  

  if ((passwordLength >= 8 && passwordLength <= 128) && 
  (chooseLower === true || chooseUpper === true || chooseNumbers === true || chooseSpecial === true)) {
    console.log("You can generate the password");
    var password = [];  
    var selectedChars = [];

    if (chooseLower === true) {
      var randomLowerIndex = random(passwordChar.lowerAlpha.length - 1);
      var randomLowerLetter = passwordChar.lowerAlpha[randomLowerIndex];
      password.push(randomLowerLetter);  
      selectedChars = selectedChars.concat(passwordChar.lowerAlpha);
    }
    if (chooseUpper === true) {
      var randomUpperIndex = random(passwordChar.upperAlpha.length - 1);
      var randomUpperLetter = passwordChar.upperAlpha[randomUpperIndex];
      password.push(randomUpperLetter);
      selectedChars = selectedChars.concat(passwordChar.upperAlpha);
    }
    if (chooseNumbers === true) {
      var randomNumberIndex = random(passwordChar.num.length - 1);
      var randomNumber = passwordChar.num[randomNumberIndex];
      password.push(randomNumber);
      selectedChars = selectedChars.concat(passwordChar.num);
    }
    if (chooseSpecial === true) {
      var randomSpecialIndex = random(passwordChar.specialChar.length - 1);
      var randomSpecialChar = passwordChar.specialChar[randomSpecialIndex];
      password.push(randomSpecialChar);
      selectedChars = selectedChars.concat(passwordChar.specialChar);
    }
    
    while (password.length < passwordLength) {
      var selectedCharsIndex = random(selectedChars.length -1);
      var randomSelectedChars = selectedChars[selectedCharsIndex];
      password.push(randomSelectedChars);
    }

    for (var i =0; i < password.length; i++) {
      console.log(password[i]);
    }

  }

  else {
    console.log("Password criteria has not been met.  Password length should be between 8 and 128 characters.  At least one character type needs to be selected.");
  }

}

function random(max) {
  var r = Math.floor(Math.random() * (max +1));
  return r;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(generatePassword())
