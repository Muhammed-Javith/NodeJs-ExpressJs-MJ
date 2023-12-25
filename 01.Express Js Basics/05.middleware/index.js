var express = require('express'); //import express js
var app = express(); //create instance express js and that app going to use in the whole program

app.use((req, res,next) => {
   console.log("First Middleware");
   next();
});
app.use((req, res,next) => {
   console.log("second Middleware");
   
});



app.listen(3000);
//app.listen is concise of this (const http ,const server, server.listen)