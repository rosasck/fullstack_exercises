const url = 'https://pokeapi.co/api/v2/pokemon/';

let getDataPromise = (url) => {
fetch(url)
.then(response => response.json())
.then((data ) =>{
    console.log("Data", data);

   if(typeof(data)== 'string'){data = JSON.parse(data)}
    var count=30;
     data.results.forEach((item) => {
        document.getElementById("results").insertAdjacentHTML("beforebegin", item.name + ' '); 

      });
})
.catch(error =>{
    console.log('Request Failed', error)
});
};

getDataPromise(url);