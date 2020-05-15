const express= require('express');
const app= express();
const port = 5000;
const cors = require('cors');
const url = 'https://restcountries.eu/rest/v2/all';
var XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest;

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
let routes = [
    {
      id: 4,
      name: 'main'
    },
    {
      id: 10,
      name: 'populous'
    },
    {
      id: 16,
      name: 'regions'
    }
];
const corsOptions ={
    origin: 'http//localhost:5000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    let result='';
    routes.forEach(elem => {
        result += '<a href="/'+ elem.name+ '">'+ elem.name+'</a><br>';
    });
    res.status(200);
    res.set({'Content-Type': 'text/plain'});
    res.send('welcome');
});

app.get('/populous', (req,res) =>{
    let resp= new XMLHttpRequest();
    resp.open('GET', url, true);
    resp.send();

    resp.onload = () => {
         if(resp.status === 200)
         {
              var obj= JSON.parse(resp.responseText);
              console.log(obj);
              for(country in obj){
                if(obj[country].population > 20000000){
                let pop= formatNumber(obj[country].population);
                res.write(obj[country].name + '  -  ' + pop + '\n');
                }
              }
         }
         else
         {
              console.log('Status Code:  ${response.status} - ${response.statusText} ');
         }
        }


});

app.get('/main', (req,res) =>{

    let resp= new XMLHttpRequest();
    resp.open('GET', url, true);
    resp.send();

    resp.onload = () => {
         if(resp.status === 200)
         {
              var obj= JSON.parse(resp.responseText);
              for(country in obj){
                res.write('Country: ' + obj[country].name + '  -  Capital: ' + obj[country].capital+ '\n');
                }
              
         }
         else
         {
              console.log('Status Code:  ${response.status} - ${response.statusText} ');
         }
        }





});
app.get('/regions', (req,res) =>{

    let resp= new XMLHttpRequest();
    resp.open('GET', url, true);
    resp.send();

    resp.onload = () => {
         if(resp.status === 200)
         {
            
            var Africa=0;
            var Asia=0;
            var North_America=0;
            var South_America=0;
            var Antartica=0;
            var Europe=0;
            var Australia=0;

              var obj= JSON.parse(resp.responseText);
             for(country in obj){
                    if(obj[country].region.localeCompare('Africa') == 0) {
                      ++Africa;
                     }
                    else if(obj[country].region.localeCompare('Asia') ==0 ){
                        ++Asia;
                     }
                    else if(obj[country].region.localeCompare("North America")==0 ){
                         ++North_America;
                       }
                     else if(obj[country].region.localeCompare("South America")==0){
                          ++South_America;
                        }
                    else if(obj[country].region.localeCompare("Antartica") ==0){
                        ++Antartica;
                        }      
                     else if(obj[country].region.localeCompare('Europe')==0){
                        ++Europe;
                        }
                     //if(obj[country].region === "Australia"){
                         else{
                             ++Australia;
                         }


                }

               res.write('Africa: ' + Africa);
               res.write('Asia: ' + Asia);
               res.write('Australia: ' + Australia);
               res.write('North America: ' + North_America);
               res.write('South America: ' + South_America);
               res.write('Antartica' + Antartica);
               res.write('Europe' + Europe);
              
         }
         else
         {
              console.log('Status Code:  ${response.status} - ${response.statusText} ');
         }
        }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })

