const data = process.argv.slice(2).splice(" ");
function mathFunc(arr) {
  const operator = arr[1];
  const a = +arr[0];
  const b = +arr[2];
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "/") return a / b;
  if (operator === "*") return a * b;
}

console.log(mathFunc(data));
