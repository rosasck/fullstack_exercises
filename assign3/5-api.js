const url = 'https://restcountries.eu/rest/v2/all';

function displayCountries(){
     let population;
     var response= new XMLHttpRequest();
     response.open("GET", url, true);
     response.responseType='json';
     response.send(null);

     response.onload = () => {
          if(response.status === 200)
          {
               console.log(response.response);
          }
          else
          {
               console.log('Status Code:  ${response.status} - ${response.statusText} ');
          }
     }
     //document.getElementById("results").insertAdjacentHTML("beforebegin",namer);
     

}
