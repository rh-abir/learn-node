// local modules
// const { a, add } = require("./local-1.js");
// const { a: a2, add: add2 } = require("./local-2.js");

// console.log(add2(a, 10, a2));

// buillt-in-moduels

const path = require("path");

console.log(
  path.dirname("G:/next-level/level-2-project/milstone-02/module-07/index.js")
);

console.log(
  path.parse("G:/next-level/level-2-project/milstone-02/module-07/index.js")
);

console.log(
  path.join("G:/next-level/level-2-project/milstone-02/module-07", "local-1.js")
);
