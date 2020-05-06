const url = 'https://pokeapi.co/api/v2/pokemon/';

let getDataPromise= (url) => {
fetch(url)
.then(response =>{
    console.log('Request Successful', response);
    return response.json();
})
.then(data =>{
    
})
.catch(error =>{
    console.log('Request Failed', error)
});
};

getDataPromise(url);