// // const { count } = require('console');
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

const fs = require('fs');

const maxValues = {
  red: 12,
  green: 13,
  blue: 14,
};

function readFile(file) {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
  const possibleGames = [];

  lines.forEach((line) => {
    const sets = line.split(': ')[1].split('; ');

    const isPossible = sets.every((set) => {
      const pulls = set.split(', ');
      return pulls.every((pull) => {
        const [value, color] = pull.split(' ');
        // console.log('=============', value, color);
        console.log('NUMBER!!!!', Number(value));
        console.log('MAX??????', maxValues[color]);
        return maxValues[color] >= Number(value);
      });
    });

    if (isPossible) {
      const gameId = parseInt(line.split(': ')[0].split(' ')[1]);
      possibleGames.push(gameId);
    }
  });

  return possibleGames;
}

console.log(
  'Sum of IDs of possible games:',
  readFile('./input.txt').reduce((sum, id) => sum + id, 0),
);
