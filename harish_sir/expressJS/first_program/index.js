const express = require("express");

const app = express();

app.get("/Aryan", (req, res) => {
  res.send("<h1>Aryan</h1>");
});

app.listen(3000, () => console.log("Example app is listning on port 3000."));
