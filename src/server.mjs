import express from "express";
import bodyparser from "body-parser";
const app = express();
import Redirection_DB from "main/Redirection_DB.js";
// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/wp/redirections", async (req, res) => {
  const redirection = new Redirection_DB({ redirection: req.body });

  redirection.write_redirect();
});
app.listen(3002, () => console.log(`API is running on port 3002 🚀`));
