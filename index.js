const express = require("express");

var process = require("process");
process.on("SIGINT", () => {
  console.info("Interrupted");
  process.exit(0);
});

const app = express();
port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use("/lib", express.static(`${__dirname}/node_modules/`));
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, "0.0.0.0", () => {
  console.log("Server Started");
});
