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


//define passwordLength here to use in future functions
let passwordLength = 0;
let passwordCharsArray = [];
// Function to prompt user for password options
//confs return boolean values
//all prompts go in here
// should return what the user wants - user input


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
    console.log(passwordLength);
    concatenateOptions();
    function concatenateOptions(){
      let confLc = confirm("Does your password need to contain lower case letters?");
      if (confLc === true) {
        passwordCharsArray = passwordCharsArray.concat(lowerCasedCharacters);
      };
      let confUc = confirm("Does your password need to contain upper case letters?");
      if (confUc === true) {
        passwordCharsArray = passwordCharsArray.concat(upperCasedCharacters);
      };
      let confSpChars = confirm("Does your password need to contain special characters?");
      if (confSpChars === true) {
        passwordCharsArray = passwordCharsArray.concat(specialCharacters);
      };
      let confNums = confirm("Does your password need to contain numbers?");
      if (confNums === true) {
        passwordCharsArray = passwordCharsArray.concat(numericCharacters);
      };
      if (passwordCharsArray.length === 0) {
        alert("You must have at least one character type in your password.");
        concatenateOptions();
      };
    }
  }
}

getPasswordOptions(); 
// console.log(passwordCharsArray); - will check which characters are in the final array for future fuctions to choose from.


// Function for getting a random element from an array - returns single character of type string
function getRandom(){
  let oneChar = passwordCharsArray[Math.floor(Math.random() * passwordCharsArray.length)];
  return oneChar;
}
// getRandom() function will get called in next function
// console.log(typeof getRandom()); //check type of output is string


//single character from getRandom is stored in new array of passwordChars strings - characters that the password is made up of.


// Function to generate password with user input
let passwordChars = new Array(); //array to store chosen characters for password
function generatePassword() {
  for (let i=0; i < passwordLength; i++){
  let char = getRandom();
  passwordChars[i] = char;
} //adds each randomly generated character to array for password
return passwordChars.join("");
}
// uses above two functions - needs to know user options and the random figures
// returns generated password

//user options are already used to generate the array for the getRandom function
// generatePassword function only needs to run getRandom
//iterations of loop are determined by user input of desired password length



//clicking "Generate Password" button will generate new password from same options i.e. same length and with same types of characters; 
// to generate password with different parameters, page can be refreshed.

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