// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt("Please enter a number of characters for the length of the password between 8 and 128: ");
  if (passwordLength === "" || passwordLength === null) {
    alert("Please enter a number between 8 and 128");
    getPasswordOptions();
  } else if (passwordLength < 8) {
    alert("Password is too short, password needs to be at least 8 characters. \nPlease enter a number between 8 and 128");
    getPasswordOptions();
  } else if (passwordLength > 128) {
    alert("Password is too long, password needs to be no more than 128 characters. \nPlease enter a number between 8 and 128");
  getPasswordOptions();
  } else {
  console.log(passwordLength);
  let confLc = confirm("Does your password need to contain lower case letters?");
  let confUc = confirm("Does your password need to contain upper case letters?");
  let confSpChars = confirm("Does your password need to contain lower case letters?");
  let confNums = confirm("Does your password need to contain lower case letters?");
  }

//confs return boolean values
//all prompts go in here
// should return what the user wants - user input
}

getPasswordOptions();
// Function for getting a random element from an array
// function getRandom(arr) {
// // write function to get random thing from array (Math.random)
// // return userchoice as random
// }

// Function to generate password with user input
// function generatePassword() {
// // uses above two functions - needs to know user options and the random figures
// // returns generated password
// let password = //above functions results
// //return password;
// }

// Don't touch this bit, already works and we haven't learned it yet:

// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);