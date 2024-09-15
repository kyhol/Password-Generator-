# Password Generator CLI

This is a Command-Line Interface (CLI) application built with Node.js that generates passwords based on user-specified criteria.

## Features

- Generate passwords with customizable length
- Option to include numbers in the password
- Option to include capital letters in the password
- Option to include special symbols in the password

## Usage

Run the application using the following command:

```
password-generator-cli [options]
```

### Options

- `--help, -h`: Display the help message
- `--length, -l <num>`: Set the desired password length (default: 8)
- `--numbers, -n`: Add numbers to the generated password
- `--capitals, -c`: Include uppercase letters in the password
- `--symbols, -s`: Add special characters to the password

### Example

```
password-gen --length 12 --numbers --symbols
```

This command will generate a 12-character password including numbers and special symbols.
