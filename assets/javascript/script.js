// Assignment code here

var getCharacterCount = function() {
 var characterCount = window.prompt("How many characters would you like your password to have? You must choose at least 8 and no more than 128.");
 // while loop to prevent user from generating a password of inappropriate length
 if (characterCount < 8 || characterCount > 128 || isNaN(characterCount))  {
   window.alert("Invalid number. Please enter a number between 8 and 128.");
   return getCharacterCount();
 }
 return characterCount;
}

// define characterCount outside of getCharacterCount() to give it global scope
var characterCount = getCharacterCount();

// create string containing only the character types selected by user 
var passwordCharacters = function() {
  // object containing prompts to determine which characters to include in password: lowercase, uppercase, numbers, special characters
  var characterTypes = {
    lowercase: window.confirm("Would you like to include lowercase characters in your password?"),
    uppercase: window.confirm("Would you like to include uppercase characters in your password?"),
    numericals: window.confirm("Would you like to include number characters in your password?"),
    special: window.confirm("Would you like to include special characters in your password?")
  }
  
  if (characterTypes.lowercase === true) {
    lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";}
    else {
      lowercaseCharacters = ""};
  if (characterTypes.uppercase === true) {
    uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercaseCharacters = ""
  }
  if (characterTypes.special === true) {
    specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  } else {
    specialCharacters = ""
  }
  if (characterTypes.numericals === true) {
    numberCharacters = "0123456789";
  } else {
    numberCharacters = "";
  }
  if (characterTypes.lowercase === false && characterTypes.uppercase === false && characterTypes.special === false && characterTypes.numericals === false) {
    window.alert("You must choose at least one type of characters! Try again.");
    return passwordCharacters();
  } else {
  return lowercaseCharacters + uppercaseCharacters + specialCharacters + numberCharacters;}
  }

  // create global variable to store resulting string from passwordCharacters()
var chosenCharacters = passwordCharacters();

// Random Password Generation function
function generatePassword() {
  var generatedPassword = "";
  var i = 0;
  // while loop to add random characters from the chosenCharacters string to a generatedPassword string until string is the appropriate length
  while (i < characterCount) {
    generatedPassword += chosenCharacters[Math.floor(Math.random()* chosenCharacters.length)];
    i++;
  }
  return generatedPassword;
}
  // create object to store user's password criteria
 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
