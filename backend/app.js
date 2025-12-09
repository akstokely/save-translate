const express = require("express");
require("dotenv").config();
const translate = require("./routes/translate.js");
const app = express();
const port = 3000;

app.use(express.json());

console.log()
app.get('/', (req, res) => {
  res.send({ "text": 'Hello World!' });
});

app.get("/translate", translate);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});