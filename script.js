// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordChar = {
    
  lowerAlpha: ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
  "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
  upperAlpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

  specialChar: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", 
  ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "^", "_", "|", "~"]

}

function generatePassword() {
  var chooseLower = confirm("Would you like the password to contain lowercase letters?");
  var chooseUpper = confirm("Would you like the password to contain uppercase letters?");
  var chooseNumbers = confirm("Would you like the password to contain numbers?");
  var chooseSpecial = confirm("Would you like the password to contain special characters?");
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");

  // passwordLength = parseInt(passwordLength);

  if ((passwordLength >= 8 && passwordLength <= 128) && 
  (chooseLower === true || chooseUpper === true || chooseNumbers === true || chooseSpecial === true)) {
    alert("You can generate the password")
  }
  else {
    alert("Password criteria has not been met.  Password length should be between 8 and 128 characters.  At least one character type needs to be selected.");
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generatePassword())
