"use strict";

const axios = require("axios");

function getAllDataHandler(req, res) {
  const url = "https://pokeapi.co/api/v2/pokemon";

  axios
    .get(url)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((err) => {
      res.status(500).send("there is and error");
    });
}

module.exports = getAllDataHandler;
