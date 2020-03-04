require("dotenv").config();

let fs = require("fs");

var spotifySong = require("./song.js")

var myMovie= require("./movie.js")

var myConcert = require("./concert.js")


var command = process.argv[2];
var term = process.argv.slice(3).join(" ");

callProgram(command, term);

function callProgram(command, term) {
  console.log(command, term);
  if (command === "movie-this") {
    myMovie(term)
  } else if (command === "spotify-this-song") {
    spotifySong(term);
  } else if (command === "concert-this") {
    myConcert()
  } else if (command === "do-what-it-says") {
  } else {
    console.log("Please enter valid command!");
  }
}
