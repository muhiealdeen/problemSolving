const fs = require('fs');

function readFile(file) {
  const lines = fs.readFileSync(file, 'utf-8');
  return lines;
}

console.log(readFile('input1.txt'));
