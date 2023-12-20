const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, './example.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');
console.log(input);
