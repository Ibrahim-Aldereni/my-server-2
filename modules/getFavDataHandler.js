"use strict";

const favModal = require("../collections/fav");

function getFavDataHandler(req, res) {
  favModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      res.send(data);
    }
  });
}

module.exports = getFavDataHandler;
