const express = require('express');
const mongoose = require('mongoose');

const data = mongoose.connection;
data.on("error", console.error.bind(console,"Connection Error" ));
data.once("open",()=>{
    console.log("Database Connected");
});

