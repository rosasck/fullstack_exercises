const url = 'https://pokeapi.co/api/v2/pokemon/';

let getDataPromise= (url) => {
fetch(url)
.then(response =>{
    console.log('Request Successful', response);
    return response.json();
})
.then(data =>{
    console.log('Data', data);
   // document.getElementById("results").insertAdjacentHTML("beforebegin", data);
})
.catch(error =>{
    console.log('Request Failed', error)
});
};

getDataPromise(url);