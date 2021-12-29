// const os = require("os");

// // info about current user
// const user = os.userInfo();

// // console.log(user);

// // method returns system uptime in seconds

// // console.log(`The system uptime is ${os.uptime() / 60} minutes`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem() / (1024 * 1024 * 1024),
//     freeMem: os.freemem() / (1024 * 1024 * 1024)
// }

// console.log(currentOS);

const path = require("path");

console.log(path.sep);
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
const absPath = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(base);
console.log(absPath);

// resume lecture from 1:09:00
