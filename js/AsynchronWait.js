const fs = require("fs");

const readDataFromFile = async () => {
  const data = await fs.readFile("file.txt", "utf8");
  console.log(data);
};
