const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return null;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Async Result : ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return null;
            } else {
              console.log("Done with this task");
            }
          }
        );
      }
    });
  }
});

console.log("Starting new task");
