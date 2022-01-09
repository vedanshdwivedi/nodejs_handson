const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} ${id}`);
});


customEmitter.on('response', ()=>{
    console.log("Different Logic");
})

customEmitter.emit("response", "Johnn", 34);
