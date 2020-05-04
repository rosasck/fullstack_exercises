const url = 'https://restcountries.eu/rest/v2/all';

function displayCountries(){
     let namer;
     let population;
     var response= new XMLHttpRequest();
     response.open("GET", url, false);
     response.send(null);
     namer= response.map((obj) => (obj.name));

     document.getElementById("results").insertAdjacentHTML("beforebegin",namer);
     

}
