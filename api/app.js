import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import expressMorgan from "morgan";
import bodyparser from "body-parser";
import {} from "dotenv/config";
//routes
import Routes from "./routes/Routes.js";
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extender: true,
  })
);
app.use(express.static("public"));
app.use(expressMorgan("tiny"));

//JWT setup
app.use((req, res, next) => {
  next();
});

app.use(Routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
