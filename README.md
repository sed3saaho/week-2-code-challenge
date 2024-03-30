## Case Swapper

This project contains a function `swapCase` that swaps the case of alphabetic characters in a given string.

# Installation

1. Clone the repository: `git clone https://github.com/Sed3Saaho/case-swapper.git`
2. Install dependencies: `npm install`

# Usage

To use the `swapCase` function, import it into your JavaScript file and call it with the desired string.

```javascript
const { swapCase } = require('./swapCase');

const inputString = "NairobiCounty";
const swappedString = swapCase(inputString);

console.log(swappedString);


# Array Generator

This project contains a function `generateArray` that generates an array of numbers within a specified range.

## Installation

1. Clone the repository: `git clone https://github.com/Sed3Saaho/array-generator.git`
2. Install dependencies: `npm install`

## Usage

To use the `generateArray` function, import it into your JavaScript file and call it with the desired start and end values.

```javascript
const { generateArray } = require('./generateArray');

const start = 61;
const end = 80;
const numbersInRange = generateArray(start, end);

console.log(numbersInRange);


# Prime Number Filter

This project contains a function `filterPrimeNumbers` that filters out non-prime numbers from an array.

## Installation

1. Clone the repository: `git clone https://github.com/Sed3Saaho/prime-number-filter.git`
2. Install dependencies: `npm install`

## Usage

To use the `filterPrimeNumbers` function, import it into your JavaScript file and pass an array of numbers as the argument.

```javascript
const { filterPrimeNumbers } = require('./filterPrimeNumbers');

const numbers = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
const primeNumbers = filterPrimeNumbers(numbers);

console.log(primeNumbers);