const data = process.argv.slice(2).splice(" ");

function mathFunc(arr) {
  if (arr.length !== 3) return "Invalid input";
  const operator = arr[1];
  const a = +arr[0];
  const b = +arr[2];
  if (isNaN(a) || isNaN(b)) return "Invalid numbers";
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "/") return a / b;
  if (operator === "*") return a * b;
  else return "Invalid operator";
}

console.log(mathFunc(data));
