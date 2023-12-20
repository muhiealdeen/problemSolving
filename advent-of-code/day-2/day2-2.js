const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

// const { input } = require('./input');

function parse(input) {}

const games = parse(input);

let sum = 0;
for (let { maxCubes } of games) {
  sum += maxCubes.red * maxCubes.blue * maxCubes.green;
}

console.log(sum);
