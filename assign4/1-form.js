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
    res.write("name: " + req.body.name);
    res.write("email: " + req.body.email);
    res.write("comments: " + req.body.comments);
    res.end();
});

app.listen(port, () =>{
    console.log(`Server running at: http://localhost:${port}`);
});