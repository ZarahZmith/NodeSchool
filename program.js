//HEllO WORLD
// console.log("HELLO WORLD");

//BABY STEPS
// console.log(process.argv);
let result = 0;
process.argv.slice(2).forEach(function(element) {
  result += Number(element);
});
// console.log(result);

//MY FIRST I/O!
let fs = require('fs');
let info = fs.readFileSync(process.argv[2], 'utf8')
let lines = info.split('\n').length-1;
console.log(lines);
