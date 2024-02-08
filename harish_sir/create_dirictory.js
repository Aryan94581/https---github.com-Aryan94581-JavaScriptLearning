const fs = require("fs");
const path = "./Directory_Exampl";
fs.access(path, (error) => {
  if (error) {
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(" New direcctory created syccessfully !!");
      }
    });
  } else {
    console.log("given directory already exist");
  }
});
