const http = require("http");
const fs = require("fs");

// create a server using raw node.js
const server = http.createServer();

// Listener

server.on("request", (req, res) => {

  if (req.url === "/read-file" && req.method === "GET") {
    // streaming file reading
    const redableStrem = fs.createReadStream(process.cwd() + "/texts/read.txt");

    redableStrem.on("data", (buffer) => {
      res.write(buffer);
    });

    redableStrem.on("end", () => {
      res.end("hello form world");
    });
  }
//   res.end("hello form world");

});

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
