"use strict";

const mongoose = require("mongoose");

//schems
const favPoki = new mongoose.Schema(
  {
    name: String,
    url: String,
  },
  { timestamps: true }
);

//modal
const Fav = mongoose.model("FavPoki", favPoki);

module.exports = Fav;
