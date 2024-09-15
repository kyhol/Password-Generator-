#!/usr/bin/env node

//password-generator-cli to run the script from anywhere in the terminal

// Grab the command line arguments, skipping the first two (node and script name)
const args = process.argv.slice(2);

// Set up some default values for our password
let length = 8;
let useNumbers = false;
let useCapitals = false;
let useSymbols = false;

// This function does the actual password generation
function generatePassword(length, useNumbers, useCapitals, useSymbols) {
  // Define our character sets
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+{}:\"<>?|[];',./";

  // Start with lowercase letters, then add variation based on added options
  let characters = letters;
  if (useNumbers) characters += numbers;
  if (useCapitals) characters += capitals;
  if (useSymbols) characters += symbols;

  // Build the password one character at a time
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Show the user how to use this tool
function displayHelp() {
  console.log(`
Usage: password-generator-cli [options]

Options:
  --help, -h          Display this help message
  --length, -l        Set the desired password length (default: 8)
  --numbers, -n       Add numbers to the generated password
  --capitals, -c      Include uppercase letters in the password
  --symbols, -s       Add special characters to the password

Example(s):
  password-generator-cli --length 12 --numbers --symbols
  password-generator-cli --symbols --capitals
`);
  process.exit(0);
}

// Go through each argument and set options accordingly
let i = 0;
while (i < args.length) {
  const arg = args[i];
  switch (arg) {
    case "--help":
    case "-h":
      displayHelp();
      break;
    case "--length":
    case "-l":
      // Make sure we have a value after the length flag
      if (i + 1 >= args.length) {
        console.error(
          "Error: --length (-l) option requires a numeric argument."
        );
        process.exit(1);
      }
      length = parseInt(args[++i], 10);
      // Check if the length is valid
      if (isNaN(length) || length <= 0) {
        console.error("Error: Length must be a positive number.");
        process.exit(1);
      }
      break;
    case "--numbers":
    case "-n":
      useNumbers = true;
      break;
    case "--capitals":
    case "-c":
      useCapitals = true;
      break;
    case "--symbols":
    case "-s":
      useSymbols = true;
      break;
    default:
      // If an option is not recognized, let the user know and show the default help
      console.error(`Error: Unknown option '${arg}'`);
      displayHelp();
  }
  i++;
}

// Time to make the password!
const password = generatePassword(length, useNumbers, useCapitals, useSymbols);
console.log(`Generated password: ${password}`);
