const EventEmitter = require("events");

const myEmitter = new EventEmitter();
// Listener
myEmitter.on("birthday", () => {
  console.log(`Heppy Birthday To you`);
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});

myEmitter.emit("birthday", "bike");
