const fs = require('fs');

const lines = fs.readFileSync('./t1_puzzle.txt', 'utf-8').replace( /[a-zA-Z]/gm, "").split('\n')

const result = lines.map(line => Number(`${line[0]}${line.slice(-1)}`)).reduce((a, v) => a + v, 0)

console.log(result)