// const fs = require('fs');

// const maxValues = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };

// function readFile(file) {
//   const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
//   const possibleGames = [];

//   lines.forEach((line) => {
//     const sets = line.split(': ')[1].split('; ');

//     const isPossible = sets.every((set) => {
//       const pulls = set.split(', ');
//       return pulls.every((pull) => {
//         const [value, color] = pull.split(' ');
//         // console.log('=============', value, color);
//         // console.log('NUMBER!!!!', Number(value));
//         console.log('MAX??????', maxValues[color]);
//         return maxValues[color] >= Number(value);
//       });
//     });

//     if (isPossible) {
//       const gameId = parseInt(line.split(': ')[0].split(' ')[1]);
//       possibleGames.push(gameId);
//     }
//   });

//   return possibleGames;
// }

// console.log(
//   'Sum of IDs of possible games:',
//   readFile('./input.txt').reduce((sum, id) => sum + id, 0),
// );
const fs = require('fs');
const readline = require('readline');

const filePath = 'input.txt';

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

const gameStats = [];

const handleSingleLine = (singleLine) => {
  const [Red, Green, Blue] = [[], [], []];
  const gameStats = {};
  const seperateGameId = singleLine.split(':');
  const separateSets = seperateGameId[1].split(';');
  separateSets.forEach((element) => {
    const separateColors = element.split(',');
    separateColors.forEach((element) => {
      const separateColor = element.split(',')[0].trim();
      const finalSeparation = separateColor.split(' ');
      if (finalSeparation[1] === 'red') Red.push(+finalSeparation[0]);
      if (finalSeparation[1] === 'green') Green.push(+finalSeparation[0]);
      if (finalSeparation[1] === 'blue') Blue.push(+finalSeparation[0]);
    });
  });
  const gameId = parseInt(seperateGameId[0].split(' ')[1].trim());
  gameStats.Red = Math.max(...Red);
  gameStats.Green = Math.max(...Green);
  gameStats.Blue = Math.max(...Blue);

  return { gameId, ...gameStats };
};

const findPossible = (games, maxColorCubes) => {
  const filteredArray = games.filter(
    (game) =>
      game.Red <= maxColorCubes.red &&
      game.Green <= maxColorCubes.green &&
      game.Blue <= maxColorCubes.blue,
  );
  return filteredArray;
};

const findTotal = (filteredArray) => {
  return filteredArray.reduce((acc, curVal) => acc + curVal.gameId, 0);
};

rl.on('line', (line) => {
  const singleGameStats = handleSingleLine(line);
  gameStats.push(singleGameStats);
});

rl.on('close', () => {
  console.log(gameStats);
  const possibleArray = findPossible(gameStats, {
    red: 12,
    green: 13,
    blue: 14,
  });

  console.log(findTotal(possibleArray));
});
