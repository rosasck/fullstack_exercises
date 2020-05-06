const url = 'https://restcountries.eu/rest/v2/all';



function displayCountries(){
     let resp= new XMLHttpRequest();
     resp.open('GET', url, true);
     resp.responseType='json';
     resp.send();

     resp.onload = () => {
          if(resp.status === 200)
          {
               var obj= JSON.parse(resp);
               console.log(obj[name] + ' - ' + obj[population]);
          }
          else
          {
               console.log('Status Code:  ${response.status} - ${response.statusText} ');
          }
     }
     

}

