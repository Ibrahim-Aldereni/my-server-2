"use strict";

require("dotenv").config();
const cors = require("cors");
const express = require("express");

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGODB_URI}/myFirstDatabase`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/////////////////////////////////////////////////////imports/////////////////////////////////////////////

const getAllDataHandler = require("./modules/getAllDataHandler");
const addFavHandler = require("./modules/addFavHandler");
const getFavDataHandler = require("./modules/getFavDataHandler");

//////////////////////////////////////////////////////routes//////////////////////////////////////////////

//localhost:3001/getFavData
server.get("/getFavData", getFavDataHandler);

//localhost:3001/addFav
server.post("/addFav", addFavHandler);

//localhost:3001/allData
server.get("/allData", getAllDataHandler);

//localhost:3001/
server.get("/", (req, res) => {
  res.send("HOME");
});

//locahost:3001/*
server.get("*", (req, res) => {
  res.status(404).send("not found");
});

//////////////////////////////////////////////////////listen ///////////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`listing to port ${PORT}`);
});
