# Password-Generation-Station

## Description

This webpage serves as a password generator. When you click "Generate" you will be prompted to chose how many characters, between 8 and 128, that the final password will be. This will then trigger prompts asking the user which password criteria they would like to include in the final output. The final password can include lowercase characters, uppercase characters, numbers, and/or special characters. If no criteria is selected then the function will return and if a number between 8 and 128 is not chosen then the function will return. 

Screenshot - ![Screenshot of password generator](<Screenshot 2023-12-04 at 9.43.04 PM.png>)

Link to webpage - https://jmayfield777.github.io/Password-Generation-Station/

## Installation

N/A

## Usage

When you click the red generate button it triggers a prompt that asks you if you to enter a number between 8 and 128. If you enter a number less than 8 or greater than 128 then the function will return. Following this prompt, the use will be asked to confirm if they would like to include lowercase characters, uppercase characters, numeric characters, and/or special characters. The function will then push the selected criteria values from each variable into the possibleCharacters variable. The generatePassword function then uses a for loop to iterate through the possibleCharacters variable and randomizes them to then output a new password in the finalPassword variable.

## Credits 

Worked through this challenge during a tutoring session with Scott Everett. 

## License

Please refer to the MIT License in the repo.