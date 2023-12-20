// const path = require('path');
// const fs = require('fs');

// const input = fs
//   .readFileSync(path.join(__dirname, 'example.txt'), 'utf8')
//   .toString()
//   .trim()
//   .split('\n');

// function parse(input) {
//   return input.map((line, index) => {
//     const match = /Game (\d+): (.+)$/.exec(line);

//     if (!match) {
//       console.error(`Error parsing line: ${line}`);
//       return null;
//     }

//     const [, id, rest] = match;

//     const picks = rest.split(/[;,] /);
//     const cubesPicked = picks.map((pick) => {
//       const [num, color] = pick.split(' ');
//       return [parseInt(num, 10) || 0, color || ''];
//     });

//     return {
//       id: parseInt(id, 10),
//       minCubes: cubesPicked.reduce(
//         (acc, [num, color]) => {
//           acc[color] = (acc[color] || 0) + num;
//           return acc;
//         },
//         { blue: 0, red: 0, green: 0 },
//       ),
//     };
//   });
// }

// const games = parse(input.filter(Boolean));

// let sum = 0;
// for (let game of games.filter(Boolean)) {
//   const { minCubes } = game;
//   const power = minCubes.red * minCubes.blue * minCubes.green;
//   sum += power;
// }

// console.log(sum);
// ------------------------------------------------------------

// const fs = require('fs');

// const maxValues = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };
// function readFile(file) {
//   const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
//   // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
//   lines.map((line) => {
//     const sets = line
//       .split(': ')[1]
//       .split('; ')
//       .map((set) => {
//         const pulls = set.split(', ');
//         console.log('pulls', pulls);
//         return pulls.every((pull) => {
//           const [value, color] = pull.split(' ');
//           // console.log('=============', value, color);
//           // // console.log('NUMBER!!!!', Number(value));
//           // console.log('MAX??????', maxValues[color]);
//           // // return maxValues[color] >= Number(value);
//         });
//       });
//     console.log('sets', sets);
//   });

//   // return lines;
// }

// console.log('LLLLLLL', readFile('./input.txt'));
// =============================================================

const fs = require('fs');

function readFile2(file) {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

  return lines.map((line) => {
    const maxValues = {
      red: 0,
      green: 0,
      blue: 0,
    };
    line
      .split(': ')[1]
      .split('; ')
      .forEach((set) => {
        const pulls = set.split(', ');
        // console.log(pulls, 'pulls');
        return pulls.map((pull) => {
          const [value, color] = pull.split(' ');
          // console.log('=============', value, color);
          // console.log('NUMBER!!!!', Number(value));
          // console.log('MAX??????', maxValues[color]);
          if (maxValues[color] < Number(value)) {
            maxValues[color] = Number(value);
          }
        });
      });
    // console.log(maxValues, 'maxValues');
    return maxValues.red * maxValues.green * maxValues.blue;
  });
}
const powerArray = readFile2('./input.txt');
const sumOfPowers = powerArray.reduce((total, number) => total + number, 0);

console.log('The sum of the power of these sets', powerArray);
console.log('The correct sum of the array is', sumOfPowers);
