const http = require('http')
const fs = require('fs')
require('dotenv').config();

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  switch (req.url){
  case '/':
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if(err){
        console.log(err)
        return
      }
      res.end(data)
    })
    break;
  case '/about':
    fs.readFile('./about.html', 'utf-8', (err, data) => {
      if(err){
        console.log(err)
        return
      }
      res.end(data)
    })
    break;
  case '/contact-me':
    fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
      if(err){
        console.log(err)
        return
      }
      res.end(data)
    })
    break;
  default:
    fs.readFile('./404.html', 'utf-8', (err, data) => {
      if(err){
        console.log(err)
        return
      }
      res.end(data)
    })
    break;
  } 
})

server.listen(port, () => {
  console.log("Server running on port " + port)
})