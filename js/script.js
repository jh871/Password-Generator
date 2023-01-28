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


//initialise global variables; 
let passwordLength = 0; //user input desired password length
let possibleChars = []; //array to store possible password characters
let passwordChars = []; //array to store chosen characters for password
//arrays are let, not const, as will be modified depending on user options and random character generation.


//Function to get user options for password and concatenate relevant character options into possibleChars
function getPasswordOptions() {
  passwordLength = parseInt(prompt("Please enter a number of characters for the length of the password between 8 and 128: "));
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
    concatenateOptions();
    function concatenateOptions(){
      let confLc = confirm("Does your password need to contain lower case letters?");
      if (confLc === true) {
        possibleChars = possibleChars.concat(lowerCasedCharacters);
      };
      let confUc = confirm("Does your password need to contain upper case letters?");
      if (confUc === true) {
        possibleChars = possibleChars.concat(upperCasedCharacters);
      };
      let confSpChars = confirm("Does your password need to contain special characters?");
      if (confSpChars === true) {
        possibleChars = possibleChars.concat(specialCharacters);
      };
      let confNums = confirm("Does your password need to contain numbers?");
      if (confNums === true) {
        possibleChars = possibleChars.concat(numericCharacters);
      };
      if (possibleChars.length === 0) {
        alert("You must have at least one character type in your password.");
        concatenateOptions();
      };
    }
  }
}
getPasswordOptions(); 

// Function for getting a random element from an array - gets one random character from array of possible characters
function getRandom(){
  let oneChar = possibleChars[Math.floor(Math.random() * possibleChars.length)];
  return oneChar;
}
// getRandom() function will get called in generatePassword function


// Function to generate password with user input - iterates through getRandom function as many times as user wanted password length to be, and then adds one character at a time to the passwordChars array to make up password content.  
//The join function on return will make password a string wth no spaces. 
function generatePassword() {
  for (let i=0; i < passwordLength; i++){
    let char = getRandom();
    passwordChars[i] = char;
  } 
  return passwordChars.join("");
}


//generatePassword function is called when button below is clicked. 

// Don't touch this bit, already works and we haven't learned it yet:
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);