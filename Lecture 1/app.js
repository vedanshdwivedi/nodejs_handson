const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];

const new_items = _.flattenDeep(items);

console.log(new_items);

console.log("Hello World");

console.log("Turned off Auto Save");

// Resume Lecture from 2:28:00
