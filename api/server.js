const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const bson = require("bson");
const fs = require("fs");
//object

// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/wp/redirections", (req, res) => {
  req.on("close", () => {
    const doc = req.body;
    const data = bson.serialize(doc);
    console.log(data);
    fs.writeFileSync("data.json", data);
  });
});

app.listen(process.env.PORT || 3002, () => {
  console.log(`API running on port ${process.env.PORT || 3002} 🚀`);
});
