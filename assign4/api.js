const express= require('express');
const app= express();
const parser= require('body-parser');
const port = 5000;
const path= require("path");

app.use(
    express.static('public')
);

var urlencodedParser= parser.urlencoded({extended: false});





