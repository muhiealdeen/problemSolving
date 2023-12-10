const fs = require('fs');

// Read the input from the file
const inputFilePath = 'input.txt';
const calibrationDocument = fs.readFileSync(inputFilePath, 'utf-8');

// Function to extract calibration values from a line
function extractCalibrationValues(line) {
  const regex = /\d/g;
  const digits = line.match(regex);
  // console.log('digits', digits);

  if (digits && digits.length > 0) {
    // Combine the first and last digits to form two-digit numbers
    const values = [];

    if (digits.length > 1) {
      values.push(parseInt(digits[0] + digits[digits.length - 1], 10));
      // console.log('values1111111111', values);
    } else {
      // If there is only one digit in the line, duplicate it to form a two-digit number
      values.push(parseInt(digits[0] + digits[0], 10));
      // console.log('values222222222222', values);
    }

    return values;
  }
  return [];
}

// Function to calculate the sum of calibration values from the document
function sumOfCalibrationValues(document) {
  const lines = document.split('\n');
  // console.log('linesSSSSSSSSSSSS', lines);
  let sum = 0;

  lines.forEach((line) => {
    const values = extractCalibrationValues(line);
    console.log('values3333333333', values);
    sum += values.reduce((acc, val) => acc + val, 0);
  });

  return sum;
}

// Calculate the sum of calibration values for the given document
const totalSum = sumOfCalibrationValues(calibrationDocument);

console.log(`The sum of all calibration values is: ${totalSum}`);
