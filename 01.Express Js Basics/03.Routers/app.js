var express = require('express'); //import express js
var app = express(); //create instance express js and that app going to use in the whole program
var routes = require('./routers.js');

//both index.js and things.js should be in same directory
app.use('/routes', routes);

app.listen(3000);
//app.listen is concise of this (const http ,const server, server.listen)