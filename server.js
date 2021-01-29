const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = 8080;
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at: http://localhost:' + port);
});
