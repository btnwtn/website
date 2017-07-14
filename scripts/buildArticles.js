const fs = require("fs");

fs.readdir("./data/articles", (err, files) => {
  if (err) throw err;
  console.log(JSON.stringify(files, null, 2));
});
