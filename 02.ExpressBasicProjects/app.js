
const express = require('express');
const path = require('path')


const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

//app.use(bodyParser.urlencoded())  - it is deprecated so use following.



app.listen(3000)


 