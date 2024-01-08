// server/server.js
const express = require('express');
const cors = require('cors');
const quotes = require('./quotes'); // Update the import statement

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
