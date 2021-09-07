const express = require('express')
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});