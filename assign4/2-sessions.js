const express= require('express'); 
const session= require( 'express-session');
const cors = require('cors');
const app= express();
const port = 5000;

let characters = [
    {
      id: 4,
      name: 'sandy'
    },
    {
      id: 10,
      name: 'spongebob'
    },
    {
      id: 16,
      name: 'patrick'
    },
    {
      id: 23,
      name: 'plankton'
    },
    {
      id: 25,
      name: 'pearl'
    }
  ];




const corsOptions ={
    origin: 'http//localhost:5000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(
    session({
        store: new session.MemoryStore(),
        secret: 'a secret to sign the cookie',
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge:86400000
        }
    })
);


app.get('/', (req, res) => {
    let result='';
    characters.forEach(elem => {
        result += '<a href="/'+ elem.name+ '">'+ elem.name+'</a><br>';
    });
    res.status(200);
    res.set({'Content-Type': 'text/plain'});
    if(req.session.example == undefined){
        req.session.example=[];
        res.send(`Welcome to http://localhost:${port}`)
    }else{
        req.session.example.push(" Currently on route: \n") ;
        res.send(req.session.example.join('hi'));
    }
});

app.get('/:character', (req,res) =>{
    res.status(200);
    res.set({'Content-Type' : 'text/plain'});
    if(req.session.example == undefined){
        req.session.example=[];
        res.send('Welcome to route: /' + req.params.character + '\n \n');
    }
    else{
        req.session.example.push('Currently on route: /' + req.params.character + '\n'+ 'Previously Visited: \n');
        res.send(req.session.example.join(' /' + req.params.character + '\n'));
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
