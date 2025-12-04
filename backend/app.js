const express = require('express');
const translate = require("./routes/translate.js");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/translate', translate);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});