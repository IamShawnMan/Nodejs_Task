import os from "os";
const memory = (os.freemem() / 1024 / 1024).toFixed(2);
console.log(memory);

export default memory;
