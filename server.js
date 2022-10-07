"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 8080;

const app = express();
//middleware - bridge between client and server.
app.use(cors());

app.get("/pokemon/:name", async (request, response) => {
  try {
    const API = `https://pokeapi.co/api/v2/pokemon/${request.params.name}`;
    const pokeResponse = await axios.get(API);
    response.json(pokeResponse.data);
  } catch (error) {
    response.status(404).json(error);
  }
});

// /pokemon/ditto  params
// /pokemon/?name=ditto  query

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
