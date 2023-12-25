var express = require('express'); //import express js
var app = express(); //create instance express js and that app going to use in the whole program

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
//app.listen is concise of this (const http ,const server, server.listen)