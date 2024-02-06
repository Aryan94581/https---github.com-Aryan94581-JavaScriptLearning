const readline = require("readline");
const fs = require("fs");

// Create interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter text to save to file: ", (input) => {
  // Close the readline interface
  rl.close();

  // Define file path
  const filePath = "";

  // Write user input to file
  fs.writeFile(filePath, input, (err) => {
    if (r1.length % 2 == 0) {
      filePath = "even.txt";
    } else {
      filePath = "odd.txt";
    }
  });
});
