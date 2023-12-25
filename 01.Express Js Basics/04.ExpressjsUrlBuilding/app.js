var express = require('express'); //import express js
var app = express(); //create instance express js and that app going to use in the whole program



app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 }); // to test http://localhost:3000/12345.

 app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 }); //to test - http://localhost:3000/things/tutorialspoint/12345.

//pattern matched routes
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });
 //ex: http://localhost:3000/12345 will give result for above uri but if u give 123456 instead of 12345 then it will shows eror.
 //to avoid that following uri matching used.

 app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 }); 

 
app.listen(3000);
//app.listen is concise of this (const http ,const server, server.listen)