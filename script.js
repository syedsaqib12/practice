console.log ("start");


// blocking
//for (let i =0; i < 1000000000 ; i++ )


/*
setTimeout ()

console.log ("stop");

let sayStop = function () {
    console,log ("stop");
}*/

// Ek machine abani thi jiska name hai Jquery Ajex, 
   // XML HTTP request
   
   // Axios : yeh wo machine hai jo apke bhelaf per request bhej deta hai.
    
   
   // Make a request for a user with a given ID

   axios.get('/user?ID=12345')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});

   //  Promise
