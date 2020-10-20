let express = require("express");
let app = express();

app.get("/test", (req, res) => {
  res.send("hello");
});

app.listen(8080);
console.log("server started");
