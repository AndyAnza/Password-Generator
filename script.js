// Assignment Code


var generateBtn = document.querySelector("#generate");


// These arrays store all the different char groups that can be used for the password


var lowerCase = ["abcdefghijklmnopqrsuvwxyz"]; console.log(lowerCase) ;
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; console.log(upperCase) ;
var numerical = ["0123456789"]; console.log (numerical) ;
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[^_`{|}~"]; console.log (specialCharacters);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
