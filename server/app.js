const express = require("express");
require("dotenv").config();
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const FileStore = require("session-file-store")(session);
const axios = require("axios");
const { Op } = require("sequelize");
const { User, Room, Friend } = require("./db/models");
const authRouter = require("./src/routes/auth.router");
const usersRouter = require("./src/routes/users.router");
const path = require("path");

const app = express();
const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;
app.set("cookieName", COOKIE_NAME);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(morgan("dev"));
app.use(express.json());

app.use(express.json());
app.use(
  session({
    name: app.get("cookieName"),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
  })
);

// APP'S ROUTES
app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/search", async (req, res) => {
  const { login, userIn } = req.body;
  console.log(login, userIn );
  const user = await User.findOne({ where: { login } });
  
  const friend = await Friend.create({name:login, user_id:userIn.id})
  res.json(friend);
});

app.get("/search/:title", async (req, res) => {
  const {title} = req.params
  const room = await Room.findAll({ where: { title:{[Op.startsWith]:`${title}%`} } });
  res.json(room);
});

app.get("/room", async (req, res) => {
  const rooms = await Room.findAll();
  res.json(rooms);
});

app.delete("/room/:id", async (req, res) => {
const {id} = req.params
  const deletRoom = await Room.destroy({where:{id:+req.params.id}})
  res.json(id);
});

app.post("/room", async (req, res) => {
  const { title, user_id } = req.body;
  const rooms = await Room.findOne({ where: { title } });
  if (!rooms) {
    const room = await Room.create({ title, user_id });
    return res.json(room);
  } else {
    res.json(Error);
  }

});

app.post("/userRoom", async (req, res) => {
  const userRoom = await Room.findOne({ where: { user_id: req.body.user.id } });
  res.json(userRoom);
});

app.post("/friend", async (req, res) => {
  const friends = await Friend.findAll({
    where: { user_id: req.body.user.id },
  });
  res.json(friends);
});

app.delete("/friend/:id", async (req, res) => {
  const {id} = req.params
  const friends = await Friend.destroy({
    where: { id: +req.params.id },
  });
  res.json(id);
});

app.listen(PORT, () => console.log(`Server vzletel ${PORT}`));
