const { Console } = require("console");

var log = {
  info: function (info) {
    console.log("info: " + info);
  },
  warning: function (warinig) {
    console.log("warning: " + warning);
  },
  error: function (error) {
    console.log("Error: " + error);
  },
};

module.exports = log;
