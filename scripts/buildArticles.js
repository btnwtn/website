const fs = require("fs");
const { promisify } = require("util");

const readDirAsync = promisify(fs.readdir);

readDirAsync("./data/articles")
  .then(files => {
    console.log("Got articles:");
    console.log(JSON.stringify(files, null, 2));
  })
  .catch(console.error);
