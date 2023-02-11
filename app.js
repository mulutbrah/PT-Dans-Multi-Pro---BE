require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

module.exports = app;
