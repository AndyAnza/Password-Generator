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















  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
