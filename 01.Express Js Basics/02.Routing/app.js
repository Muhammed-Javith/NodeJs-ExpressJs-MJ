var express = require('express'); //import express js
var app = express(); //create instance express js and that app going to use in the whole program

app.get('/hello', function(req, res){ //handle get request
   res.send("Hello World!");
});

app.post('/helloji', function(req, res){ //handle post request
   res.send("You just called the post method at '/hello'!\n");
});
//note: here to test post method use postman


app.all('/test', function(req, res){ //handle all kind of requests
   res.send("HTTP method doesn't have any effect on this route!");
});

app.listen(3000);
//app.listen is concise of this (const http ,const server, server.listen)