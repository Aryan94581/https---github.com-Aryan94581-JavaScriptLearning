const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error rad file :", err);
  } else {
    console.log("file content:", data);
  }
});