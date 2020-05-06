const url = 'https://restcountries.eu/rest/v2/all';

function formatNumber(num) {
     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }

function displayCountries(){
     let resp= new XMLHttpRequest();
     resp.open('GET', url, true);
    // resp.responseType='json';
     resp.send();

     resp.onload = () => {
          if(resp.status === 200)
          {
               console.log(resp)
               var obj= JSON.parse(resp.responseText);
               console.log(obj)
               for(country in obj){
                 let pop= formatNumber(obj[country].population);
                 document.getElementById("results").insertAdjacentHTML("beforebegin", obj[country].name + '  -  ' + pop + '<br>')
               }
          }
          else
          {
               console.log('Status Code:  ${response.status} - ${response.statusText} ');
          }
     }
     

}

