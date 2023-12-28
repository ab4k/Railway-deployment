const express = require("express");
const myApp = express();
const PORT = 4000 || process.env.PORT;

const format = require("date-format");

myApp.get("/", (req, res) => {
  res.status(201).send("<h2>Hello</h2><h3>This is beeznass</h3>");
});

myApp.get("/api/v1/instagram", (req, res) => {
  const instaGram = {
    userName: "ab4k",
    followers: "23.3k",
    follows: "50k",
    // date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(instaGram);
});

myApp.get("/api/v1/facebook", (req, res) => {
  const faceBook = {
    userName: "abhay_00",
    followers: 1,
    follows: 1,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(faceBook);
});

myApp.get("/api/v1/linkedin", (req, res) => {
  const linkedIn = {
    userName: "a__00",
    followers: 1,
    follows: 1,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(linkedIn);
});

myApp.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

myApp.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
