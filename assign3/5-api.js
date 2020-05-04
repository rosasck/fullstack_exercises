const url = 'https://restcountries.eu/rest/v2/all';

function displayCountries(){
     let population;
     var response= new XMLHttpRequest();
     response.open("GET", url, false);
     response.send(null);
     let namer= response.map(({name}) => ({name}));

     document.getElementById("results").insertAdjacentHTML("beforebegin",namer);
     

}
