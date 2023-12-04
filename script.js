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
  var numbers = confirm("Would you like to include numbers?");
  var specialsPrompt = confirm("Would you like to include special characters?");

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}