const fs = require('fs');

function readFile2(file) {
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');

  return lines.map((line) => {
    const maxValues = {
      red: 0,
      green: 0,
      blue: 0,
    };
    // console.log(line, 'line');
    line
      .split(': ')[1]
      .split('; ')
      .forEach((set) => {
        const pulls = set.split(', ');
        // console.log(pulls, 'pulls');
        return pulls.map((pull) => {
          const [value, color] = pull.trim().split(' ');
          // console.log('=============', value, color);
          // console.log('NUMBER!!!!', Number(value));
          // console.log('MAX??????', maxValues[color]);
          maxValues[color] = Math.max(maxValues[color], Number(value));
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
