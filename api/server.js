const express = require("express");
const bodyparser = require("body-parser");
const app = express();
// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/wp/redirections", (req, res) => {
  req.on("close", () => {
    console.log(req.body);
    res.end();
  });
});

app.listen(process.env.PORT || 3002, () => {
  console.log(`API running on port ${process.env.PORT || 3002} 🚀`);
});
