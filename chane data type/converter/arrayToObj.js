import os from "node:os";
import process from "node:process";

const data = process.argv.slice(2);
console.log(data);

let parsedData;
try {
  parsedData = JSON.parse(data[0]);
} catch (error) {
  console.log(error);
  process.exit(1);
}
let obj = {};
parsedData.forEach(([key, value]) => {
  obj[key] = value;
});

console.log(obj);
