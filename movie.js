var fs = require("fs");

var axios = require("axios");

function myMovie(userInput) {
  if (!userInput) {
    console.log("Need to assign default value to song!");
    userInput = "Mr.Nobody";
  }

  var url =
    "https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

  axios.get(url).then(function(response) {
    console.log(`Title: ${response.data.Title}`);
    console.log(`Released: ${response.data.Year}`);
    console.log(`IMDB Rating: ${response.data.Ratings[1].Value}`);
    console.log(`Rotton Tomatoes Rating: ${response.data.Ratings[1].Value}`);
    console.log(`Produced in: ${response.data.country}`);
    console.log(`Plot: ${response.data.plot}`);
    console.log(`Starring: ${response.data.Actors}`);
  });
}

module.exports = myMovie;
