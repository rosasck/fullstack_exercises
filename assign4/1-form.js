const express= require('express');
const parser = require('body-parser');
const app= express();
const port = 5000;

app.use(
    parser.urlencoded({
    extended: false,
    limit: 1024
    })
);
app.post('/submit', (req, res)=> {
    console.log("name: " + req.body.name);
    console.log("email: " + req.body.email);
    console.log("comments: " + req.body.comments);
    res.end();
});

app.listen(port, () =>{
    console.log('Server running at: http://localhost:5000');
});