// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// HTML button

var passwordLength = 0;
    lowercase = ["a", "b", "c", "d" ,"e" ,"f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    specialChar =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// Series of Prompts

function isPasswordLengthCorrect( passwordLength ) {

    return passwordLength >= 8 && passwordLength <=128; }

while(! isPasswordLengthCorrect( passwordLength )) {
       passwordLength = parseInt(prompt("Provide a password length between 8 and 128"));
    }

    // var lowercase = confirm("would you like lowercase letters in your password?");
   
    // var uppercase = confirm("Would you like UPPERCASE letters in your password?");
   
    // var numeric = confirm("Would you like numbers in your password");
   
    // var specialChar =confirm("Would you like Special characters?");
   
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


var options = {
           "passwordLength" : passwordLength,
           "lowercase": confirm("Would you like lowercase letters in your password?"),
           "uppercase" : confirm("Would you like UPPERCASE letters in your password?"),
           "numbers" : confirm("Would you like numbers (0-9) in your password?"),
           "specialChar" : confirm("Would you like special characters in your password?")
        };
   

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
function generatePassword( options ) {

        var newPassword = "",
            possibleCharacters = [],
            requiredCharacters = [];

        if ( options.lowercase ) {
           possibleCharacters = possibleCharacters.concat( lowercase );        
            requiredCharacters.push( lowercase[ Math.floor(Math.random() * lowercase.length)]);
        }

        if ( options.uppercase ) {
            possibleCharacters = possibleCharacters.concat( uppercase );
            requiredCharacters.push( uppercase[Math.floor(Math.random() * uppercase.length)]);
        }
 
        if ( options.numbers ) {
            possibleCharacters = possibleCharacters.concat( numbers );
            requiredCharacters.push( numbers[Math.floor(Math.random() * numbers.length)]);
        }

        if ( options.specialChar ) {
            possibleCharacters = possibleCharacters.concat( specialChar );
            requiredCharacters.push( specialChar[Math.floor(Math.random() * specialChar.length)]);
        }

        for (var i = 0; i = options.passwordLength; i++) {

            if(requiredCharacters[i]){
            newPassword += requiredCharacters[i]
            }
            else
             newPassword += possibleCharacters [Math.floor(Math.random() * possibleCharacters.length)]}
        ;
        
    console.log( newPassword );
    return newPassword;
    }
    
    console.log(generatePassword(options));
 
    generatePassword(options);

    console.log(password);
 


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Display



     
    

//         // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
