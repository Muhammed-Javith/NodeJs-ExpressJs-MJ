

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', function(req, res){
   res.cookie('name', 'express').send('cookie set'); //Sets name = express
});
app.get('/getcookie', function(req, res) {  
    console.log("Cookies :  ", req.cookies);  
  });  
app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
 });
app.listen(3000);