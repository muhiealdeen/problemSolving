const fs = require('fs');

fs.readFile('./examlpe.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const input = data.split('\n');
  console.log(input);
});
