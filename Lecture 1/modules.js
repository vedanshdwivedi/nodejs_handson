// CommonJS, every file is a moduel
// Modules - Encapsulated Code (only share minimum)

// local

const secret = "SUPER SECRET";

// shared

const john = "john";
const peter = "peter";

module.exports = { john, peter };

const sayHi = require("./utils");
const data = require("./alternative");
require("./mind-grenade");
// console.log(data);

// console.log(names);

sayHi(names.john);
sayHi(names.peter);
