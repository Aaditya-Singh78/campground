const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://27017/camp');

const data = mongoose.connection;
data.on("error", console.error.bind(console,"Connection Error" ));
data.once("open",()=>{
    console.log("Database Connected");
});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.send("Hello from Camp Ground!");
})

app.listen(3000,()=>{
    console.log("Serving on port 3000");
});