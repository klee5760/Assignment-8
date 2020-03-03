var keys = require("./keys");

var fs = require("fs");

var axios = require("axios");

function myMovies(userInput) {

    function spotifySong(movieName) {
        if(!movieName){
          console.log("Need to assign default value to song!")
          movieName = "Men in Black"
}

var url = "http://www.omdbapi.com/" + movie + "";

axios.get(url).then{
    function (response) {

        console.log('Title: ${movie.data.Title}');
        console.log('Released: ${movie.data.Year}');
        console.log('IMDB Rating: ${movie.data.Ratings[1].Value}');
        console.log('Rotton Tomatoes Rating: ${movie.data.Ratings[1].Value}');
        console.log('Produced in: ${movie.data.country}');
        console.log('Plot: ${movie.data.plot}');
        console.log('Starring: ${movie.data.Actors}');
    }
  }
}