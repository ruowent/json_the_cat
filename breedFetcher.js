const request = require('request');
const userInput = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`;

request(url, (error, response, body) => {

  if (error) {
    console.log('URL is invalid');
  } else if (!JSON.parse(body)[0]) {
    console.log('Cannot find breed info');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
