const express = require('express');
const path = require('path');
const rootDir = require('../utils/path')
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
 })
router.post('/add-product',(req,res,next)=>{
    console.log('Form data:',req.body.title);
    const productName = req.body.title;
    const htmlContent = `<b>Product submitted!</b><br><p><h1 style="color: red;">Product Name: ${productName}</h1></p>`;
    // Send the HTML content to the client
    res.send(htmlContent);
    //res.send('<b>Product submitted!</b>')
    
})

module.exports =  router;
 