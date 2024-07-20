const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");

const app = express();
const port = 3000;

const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server.listen(port, () => {
  console.log("Server running on port:", port);
});

app.post("/register-book", async (req, res) => {
  const newBook = req.body;
  res.json(newBook);
});
