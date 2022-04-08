const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const { User } = require("./db/models");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/search", async (req, res) => {
  const { login } = req.body;
  const user = await User.findOne({ where: { login } });
  
  res.json(user);
});

app.listen(PORT, () => console.log(`Server vzletel ${PORT}`));
