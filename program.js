// console.log("HELLO WORLD");

// console.log(process.argv);
let result = 0;
process.argv.slice(2).forEach(function(element) {
  result += Number(element);
});
console.log(result);
