const { createReadStream } = require("fs");

const stream = createReadStream("./big_file.txt", {highWaterMark: 200000, encoding: 'utf-8'});


stream.on('data', (result)=>{
    console.log(result);
})


stream.on('error', (err)=>{console.log(err);})