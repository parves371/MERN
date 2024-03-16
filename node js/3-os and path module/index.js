// os , path

const os = require('os');

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

console.log(__dirname);
const path =require('path');

const extensionName = path.extname("demo.txt");
console.log(extensionName);

const newPath= path.join(__dirname + "/shuvo");
console.log(newPath);

console.log(path);
