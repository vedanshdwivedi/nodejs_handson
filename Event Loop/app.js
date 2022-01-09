const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile(
      "../Lecture 1/content/first.txt",
      "utf-8"
    );
    const second = await readFile(
      "../Lecture 1/content/second.txt",
      "utf-8"
    );
    await writeFile(
      "../Lecture 1/content/result-promise.txt",
      `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("../Lecture 1/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
