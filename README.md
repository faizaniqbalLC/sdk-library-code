# sdk-library-code
Bum Guys this is small package created by a small tiny developer Muhammad Fizan Iqbal
You can install this package by npm intall sdknow

Use case ( How you can use this package )
import Typicode from "sdknow"; const client = new Typicode({ apiKey: "123", });

client.getPosts().then((res) => { 
// this code shall show you all jsonplaceholder posts 
console.log(res); 
});

client.getPostById(1).then((res) => { 
// this function shall show you only post according to id that you passed.
console.log(res);
})
