require("dotenv").config();

let fs = require("fs");

var mySpotify = require("./song.js")

var myMovie= require("./movie.js")

var myConcert = require("./concert.js")


var command = process.argv[2];
var term = process.argv.slice(3).join(" ");

callProgram(command, term);

function callProgram(command, term) {
  console.log(command, term);
  if (command === "movie-this") {
    axiosMovie(term)
  } else if (command === "spotify-this-song") {
    spotifySong(term);
  } else if (command === "concert-this") {
    concert()
  } else if (command === "do-what-it-says") {
  } else {
    console.log("Please enter valid command!");
  }
}
