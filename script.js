// Define Variables
var passwordLength = 0,
    lowercase = ["a", "b", "c", "d" ,"e" ,"f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    specialChar =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
    button = document.getElementById("generate"),
    textArea = document.getElementById("password");

console.log(button);

function startNewPassword(){
     
//Create  Series of Prompts

function isPasswordLengthCorrect( passwordLength ) {
    return passwordLength >= 8 && passwordLength <=128; }

    while(! isPasswordLengthCorrect( passwordLength )) {
       passwordLength = parseInt(prompt("Provide a password length between 8 and 128"));
    }

    // var lowercase = confirm("would you like lowercase letters in your password?");
    // var uppercase = confirm("Would you like UPPERCASE letters in your password?");
    // var numeric = confirm("Would you like numbers in your password");
    // var specialChar =confirm("Would you like Special characters?");

// Define options object
var options = {
           "passwordLength" : passwordLength,
           "lowercase": confirm("Would you like lowercase letters in your password?"),
           "uppercase" : confirm("Would you like UPPERCASE letters in your password?"),
           "numbers" : confirm("Would you like numbers in your password?"),
           "specialChar" : confirm("Would you like special characters in your password?")
        };

// Generate password & adjust text box on html
    textArea.value = genPassword( options );
    passwordLength = 0;
    }

function genPassword( options ) {

        var password = '',
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

        for (var i = 0; i < options.passwordLength; i++) {

            if(requiredCharacters[i]){
            password += requiredCharacters[i];
            }

            else {
             password += possibleCharacters [Math.floor(Math.random() * possibleCharacters.length)];
 
        }
        }   
        return password;
    }
 
    
// When button is pressed function starts
button.addEventListener("click", startNewPassword );