require("dotenv").config();
const express = require("express");
const session = require('express-session');
const morgan = require("morgan");
const cors = require("cors");
const FileStore = require('session-file-store')(session);
const axios = require("axios");
const { User } = require("./db/models");
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const app = express();
const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;
app.set('cookieName', COOKIE_NAME);
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(morgan("dev"));
app.use(express.json());

app.use(express.json());
app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
  }),
);

// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);


app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/search", async (req, res) => {
  const { login } = req.body;
  const user = await User.findOne({ where: { login } });
  
  res.json(user);
});








app.listen(PORT, () => console.log(`Server vzletel ${PORT}`));
