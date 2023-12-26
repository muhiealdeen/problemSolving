const fs = require('fs');

fs.readFile('./examlpe.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // console.log(data);
  const schematicRows = data.split('\n').filter((row) => row);
  const totalRows = schematicRows.length;
  const totalCols = schematicRows[0].length;
  console.log(schematicRows, totalRows, totalCols);
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
});
