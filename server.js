import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cors from "cors";
import knex from "knex";
import { handleRegister } from "./controllers/register.js";
import { handleSignIn } from "./controllers/signIn.js";
import { handleProfileGet } from "./controllers/profileGet.js";
import { handleImage } from "./controllers/image.js";
import { handleApiCall } from "./controllers/apiCall.js";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "Amaury",
    password: "",
    database: "smart-brain",
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/signin", (req, res) => {
  handleSignIn(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  handleProfileGet(req, res, db);
});

app.put("/image", (req, res) => {
  handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  handleApiCall(req, res);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

// --> res = this is working
// signin --> POST = success/fail
// register --> POST = user
// profile/:userId --> GET = user
// image -- PUT --> user
//
