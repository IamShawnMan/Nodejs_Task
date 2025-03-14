import os from "os";

const data = process.argv.slice(2).join();

if (data === "check-memory") {
  const freeMemBytes = os.freemem();
  //   const freeMemKb = (freeMemBytes / 1024).toFixed(2);
  const freeMemMb = (freeMemBytes / 1024 / 1024).toFixed(2);
  //   const freeMemGb = (freeMemMb/1024).toFixed(2);
  console.log(`Free memory: ${freeMemMb}Mb`);
} else {
  console.log("No command provided");
}
