const http = require("http");
const EventEmitter = require("events");

const customEmitter = new EventEmitter()


// const server = http.createServer((req, res) => {
//     res.end("Welcome")
// });

customEmitter.on("listen", (server) => {
  server.listen(5000, () => console.log("Listening on Port 5000"));
});


customEmitter.on("create", () => {
    const server = http.createServer((req, res) => {res.end("Welcome")})
    customEmitter.emit("listen", server)
})

customEmitter.emit("create")