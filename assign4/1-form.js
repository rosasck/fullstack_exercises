const express= require('express');
const app= express();
const parser= require('body-parser');
const port = 5000;
const path= require("path");

app.use(
    express.static('public')
);

var urlencodedParser= parser.urlencoded({extended: false});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


app.post('/submit',urlencodedParser, (req, res)=> {
    res.write("name: " + req.body.name + '\n');
    res.write("email: " + req.body.email+ '\n');
    res.write("comments: " + req.body.comments+ '\n');
    res.end();
});

app.listen(port, () =>{
    console.log(`Server running at: http://localhost:${port}`);
});