//The require command returns the object from the axios module. 
//If you don't capture it in a variable you can't reference it.
//Anytime you execute an HTTP request you can reference the variable axios.
const axios = require('axios');

//axios method making HTTP request to server URL which returns a promise.
axios('https://austincodingacademy.com/')
//Once promise resolves, it will return the data which is then passed into the callback function. 
  .then(function(response) {
    console.log(response)
  });

  //Alternate way using async and await.
// const axiosFunct = async () => {
//   let axiosData = await axios('https://austincodingacademy.com/');
//     console.log(axiosData)
// }

//Here we are making an HTTP request but recieving just the headers.
axios.head('https://austincodingacademy.com/')
  .then(function (response) {
    console.log(response)
  })