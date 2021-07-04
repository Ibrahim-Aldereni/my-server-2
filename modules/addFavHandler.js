"use strict";

const favModal = require("../collections/fav");

function addFavHandler(req, res) {
  const { name, url } = req.body;

  favModal.find({ name: name }, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      if (data.length == 0) {
        const newFav = new favModal({
          name,
          url,
        });
        newFav.save();
      } else {
        console.log("poki exist");
      }
    }
  });
}

module.exports = addFavHandler;
