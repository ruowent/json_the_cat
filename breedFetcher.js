const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback('URL is invalid', null);

    } else if (!JSON.parse(body)[0]) {
  
      callback('Cannot find breed info', null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });

};

module.exports = {fetchBreedDescription};