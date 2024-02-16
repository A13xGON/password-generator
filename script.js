// Assignment Code
var generateBtn = document.querySelector("#generate");

var promptsAnswered = 0;
let finalPassword = ""; 
let passwordUpper = true;
let passwordLower = true;
let passNum = true;
let passSpecial = true;
let allowedChars = ""; 

let passwordLength = 0;


// Asking for Length 
function promptForPass() {

  let userLength = prompt("How long do you want your password? (Password must be between 8 to 128 characters.)");

  if (userLength >= 8 && userLength <= 128) {
    passwordLength = userLength;
  }
  else {
    window.alert("Invalid number of characters, please try again.");
    promptForPass();
  };

  // Asking for types of characters 
  let typeUpper = window.confirm("Do you want uppercase letters?");
  if (typeUpper === true) {
    passwordUpper = true;
    promptsAnswered++;
  }
  else {
    passwordUpper = false;
  };


  let typeLower = window.confirm("Do you want lowercase letters?");
  if (typeLower === true) {
    passwordLower = true;
    promptsAnswered++;
  }
  else {
    passwordLower = false;
  };


  let numbers = window.confirm("Do you want numbers?");
  if (numbers === true) {
    passNum = true;
    promptsAnswered++;
  }
  else {
    passNum = false;
  };


  let specialChars = window.confirm("Do you want special characters?");
  if (specialChars === true) {
    passSpecial = true;
    promptsAnswered++;
  }
  else {
    passSpecial = false;
  };


  if (promptsAnswered === 0) {
    window.alert("Sorry, you must choose at least one character type.");
    promptForPass();
  };
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersforPass = "1234567890";
  var specialCharforPass = "!@#$%^&*()";
  var finalPassword = "";
  let finalChars = "";



  finalPassword = ""; 

  allowedChars += passwordUpper ? upperLetters : ""; 
  allowedChars += passwordLower ? lowerLetters : ""; 
  allowedChars += passNum ? numbersforPass : ""; 
  allowedChars += passSpecial ? specialCharforPass : ""; 
  
  for(let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    finalPassword += allowedChars[randomIndex];
    
  }

  console.log(finalPassword); 

return finalPassword;

};

// Write password to the #password input
function writePassword(password) {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};








// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var password = promptForPass();
  writePassword(password);
   
})



