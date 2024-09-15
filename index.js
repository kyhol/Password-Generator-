#!/usr/bin/env node

// Get the CLI arguments
const args = process.argv.slice(2);

// Default password settings
let length = 8;
let useNumbers = false;
let useCapitals = false;
let useSymbols = false;

// Function to generate a password
function generatePassword(length, useNumbers, useCapitals, useSymbols) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+{}:\"<>?|[];',./";

  let characters = letters;
  if (useNumbers) characters += numbers;
  if (useCapitals) characters += capitals;
  if (useSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Parse CLI arguments
args.forEach((arg, index) => {
  if (arg === "--length" || arg === "-l") {
    length = parseInt(args[index + 1], 10);
    if (isNaN(length) || length <= 0) {
      console.error("Error: Length must be a positive number.");
      process.exit(1);
    }
  } else if (arg === "--numbers" || arg === "-n") {
    useNumbers = true;
  } else if (arg === "--capitals" || arg === "-c") {
    useCapitals = true;
  } else if (arg === "--symbols" || arg === "-s") {
    useSymbols = true;
  } else if (arg === "--help" || arg === "-h") {
    console.log(`
            Usage: password-gen [options]

            Options:
              --help, -h          Display this help message
              --length, -l        Set the desired password length (default: 8)
              --numbers, -n       Add numbers to the generated password
              --capitals, -c      Include uppercase letters in the password
              --symbols, -s       Add special characters to the password

            Example:
              password-gen --length 12 --numbers --symbols

        `);
    process.exit(0);
  }
});

// Generate and display the created password
const password = generatePassword(length, useNumbers, useCapitals, useSymbols);
console.log(`Generated password: ${password}`);
