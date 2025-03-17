import process from "process";

export const processId = process.pid;
export const parentProcessId = process.ppid;
export const version = process.version;

console.log("================ Jarayon halida malumot ==================");
console.log(`Process ID: ${processId}`);
console.log(`Parent Process ID: ${parentProcessId}`);
console.log(`Version: ${version}`);
