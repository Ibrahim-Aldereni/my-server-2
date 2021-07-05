"use strict";

const favModal = require("../collections/fav");

function deleteFavDataHandler(req, res) {
  let name = req.params.name;

  favModal.deleteOne({ name }, (err, data) => {
    favModal.find({}, (err, data) => {
      if (err) {
        res.status(500).send("there is an error");
      } else {
        res.send(data);
      }
    });
  });
}

module.exports = deleteFavDataHandler;
