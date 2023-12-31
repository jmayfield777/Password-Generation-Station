// Variables to store password criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var numbers = "123456789";
var specials = "!@#$%^&*";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Stores length criteria in a variable
  var passwordLength = prompt("Enter a number between 8 and 128: ");
  
  // Validates password length between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  // Variables to store password criteria prompts
  var lowercasePrompt = confirm("Would you like to include lowercase characters?");
  var uppercasePrompt = confirm("Would you like to include uppercase characters?");
  var numbersPrompt = confirm("Would you like to include numbers?");
  var specialsPrompt = confirm("Would you like to include special characters?");
  
  // Edge case if no criteria is selected
  if (!lowercasePrompt && !uppercasePrompt && !numbersPrompt && !specialsPrompt) {
    alert("Please select at least one of the criteria.");
    return;
  }

  // Check to see if variables are working
  console.log(passwordLength, lowercasePrompt, uppercasePrompt, numbers, specialsPrompt);

  // Variable for possible characters
  var possibleCharacters = "";

  // If true push variable contents to possible characters variable
  if (lowercasePrompt) {
    possibleCharacters += lowercase;
  }

  if (uppercasePrompt) {
    possibleCharacters += uppercase;
  }

  if (numbers) {
    possibleCharacters += numbers;
  }

  if (specials) {
    possibleCharacters += specials;
  }

  // Log to make sure possibleCharacters is receiving the password criteria
  console.log(possibleCharacters);

  // Variable for new password
  var finalPassword = "";

  // Iterate through possibeCharacters to generate random password
  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters[randomIndex];
  }

  return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}