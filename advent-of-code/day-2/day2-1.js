// const { count } = require('console');
const fs = require('fs');

const maxValues = {
  red: 12,
  green: 13,
  blue: 14,
};
function readFile(file) {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
  // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  lines.map((line) => {
    const sets = line
      .split(': ')[1]
      .split('; ')
      .map((set) => set.split(', '));
    console.log(sets);
  });

  // return lines;
}

console.log('LLLLLLL', readFile('input1.txt'));
