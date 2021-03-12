const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const Write_Json = require('./src/Write_Json.js');
// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/wp/redirections', async (req, res) => {
  const redirection = new Write_Json({ redirection: req.body });

  redirection.check();
});
app.listen(3002, () => console.log(`API is running on port 3002 🚀`));
