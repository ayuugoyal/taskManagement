const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes/taskRouters");

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(`error occured during connecting ${err} ...`);
  });

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
