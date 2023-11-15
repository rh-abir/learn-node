const fs = require("fs");

// reading a file text

const readText = fs.readFileSync("./texts/read.txt", "utf-8");

console.log(readText);

// writing a text

const writing = fs.writeFileSync(
  "./texts/write.txt",
  readText + "this is my write text"
);

console.log(writing);
