// Assignment Code


var generateBtn = document.querySelector("#generate");


// These arrays store all the different char groups that can be used for the password


var lowerCase = ["abcdefghijklmnopqrsuvwxyz"]; console.log(lowerCase) ;
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; console.log(upperCase) ;
var numerical = ["0123456789"]; console.log (numerical) ;
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[^_`{|}~"]; console.log (specialCharacters);


// GeneratePassword function starts here


function generatePassword() {


// In this prompt the password length is determined by the user


var userLength = parseInt (window.prompt ("Type the length of your password. Min 8 characters. Max 128 characters"));


// In this section if the password is outside of the parameters, an alert will pop and then it will take you back to the first length prompt


if ( userLength >= 8 && userLength <= 128){
  console.log("we good");
} else {
  alert("Your password length must be from 8 to 128 characters");
  var userLength = parseInt (window.prompt ("Type the length of your password. Min 8 characters. Max 128 characters"));
}
console.log(userLength);


// These confirm windows will let the user select which parameters wants to use in the password


var confirmLowerCase = window.confirm ("Do you want to use lowercase?");
var confirmUpperCase = window.confirm ("Do you want to use uppercase?");
var confirmNumerical = window.confirm ("Do you want to use numerical?");
var confirmSpecialCharacters = window.confirm ("Do you want to use special characters?");


// This section validates if the user selected at least one parameter, if not it will take him back to the first length prompt


if(confirmLowerCase === false && confirmUpperCase === false && confirmNumerical === false && confirmSpecialCharacters === false) {
  alert ("Your password has to have at least one parameter");
  var userLength = parseInt (window.prompt ("Type the length of your password. Min 8 characters. Max 128 characters"));
}


// Here is where the selected char arrays will be joined together in the variable charsSelected


var charsSelected = [];
if (confirmLowerCase){
  charsSelected.push(lowerCase);
}
if (confirmUpperCase) { 
  charsSelected.push(upperCase) ;
}
if (confirmNumerical){
  charsSelected.push(numerical) ;
}
if (confirmSpecialCharacters){
  charsSelected.push(specialCharacters);
}

console.log(charsSelected);


// The arrays inside charSelected will be joined in a single string in a new variable called charsSelectedJoined


var charsSelectedJoined = charsSelected.join('');

console.log(charsSelectedJoined)












  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
