const fs = require('fs');

const lines = fs.readFileSync('../day1.txt', {encoding: 'utf-8'}).split('\n').filter((x) => x).map((x) => parseInt(x, 10));

console.log(lines);