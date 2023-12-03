// const http = require('http');
// const path = require('path');

// const server = http.createServer((req, res) => {
    
//   const urlPath = () => {
//     if(req.url === '/'){
//         return '/index.html'
//     }
//     if(req.url === '/about'){
//         return '/about.html'
//     }
//     if(req.url === '/contact'){
//         return '/contact-me.html'
//     }
//     return '404.html'
//   }


//     // Map the URL path to the corresponding file path
//     const filePath = path.join(".", urlPath());


//     
// });

// const port = 3000; // You can use any available port

// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/about.html")
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact-me.html")
})
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
  });

  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });