const fs = require('fs');

const hasAdjacentSymbol = (str) => {
  if (str?.length && str.split('').find((char) => isNaN(char) && char !== '.'))
    return true;
  return false;
};

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const schematicRows = data.split('\n').filter((row) => row);
  const totalRows = schematicRows.length;
  const totalCols = schematicRows[0].length;

  let partNumbers = [];

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      const currentChar = '' + schematicRows[i][j];
      if (isNaN(currentChar)) continue;

      let partNumber = currentChar;
      for (let col = j + 1; col < totalCols; col++) {
        const nextChar = schematicRows[i][col];
        if (Number.isInteger(parseInt(nextChar))) {
          partNumber += nextChar;
        } else {
          j = col;
          break;
        }
      }

      const top =
        i === 0
          ? ''
          : schematicRows[i - 1].substring(j - partNumber.length - 1, j + 1);
      const bottom =
        i === totalRows - 1
          ? ''
          : schematicRows[i + 1].substring(j - partNumber.length - 1, j + 1);
      const left = schematicRows[i][j - partNumber.length - 1] || '';
      const right = schematicRows[i][j] || '';
      // console.log(partNumber, top, right, bottom, left);

      if (
        hasAdjacentSymbol(top) ||
        hasAdjacentSymbol(bottom) ||
        hasAdjacentSymbol(right) ||
        hasAdjacentSymbol(left)
      ) {
        partNumbers.push(Number(partNumber));
      }
    }
  }

  let sumOfPartNumbers = partNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  console.log(sumOfPartNumbers);
});
