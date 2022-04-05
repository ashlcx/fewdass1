#!/usr/bin/env node
var args, NodeInterval, ni;

args = process.argv.splice(2);
NodeInterval = require("NodeInterval");

ni = new NodeInterval.Watcher({
  watchFolder: "./src/templates/",
  inputFile: "./src/index.html",
  replacementString: "@templates@",
  outputFile: "./public/index.html",
});

// Pass "--watch" from command line to keep the proccess going.
if (args[0] == "--watch") {
  ni.startWatch();
}
