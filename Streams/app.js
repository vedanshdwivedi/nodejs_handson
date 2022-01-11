var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./big_file.txt', {encoding: 'utf-8'})
    // res.end(text)
    const fileStream = fs.createReadStream("./big_file.txt", {
      encoding: "utf-8",
    });
    fileStream.on("open", (data) => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
