require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("client"));

const stripe = require("stripe")(process.env.STRIP_KEY);

const storeItems = new Map([
  [1, { priceInCents: 1000, name: "jym protein" }],
  [2, { priceInCents: 2000, name: "On pre-workout" }],
]);

app.listen(3000);
