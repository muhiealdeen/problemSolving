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
});
