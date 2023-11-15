const fs = require("fs");

// reading text asynchoronously

const readFile = fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data);

  //   writing text asynchronously

  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writhing data");
    }
  });
});


console.log('testing asynchronus')