var Spotify = require('node-spotify-api');

var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var command = process.argv[2];
var term = process.argv.slice(3).join(" ");


function spotifySong(songName) {
    if(!songName){
      console.log("Need to assign default value to song!")
      songName = "I Want it That Way"
    }
    spotify.search({ type: "track", query: songName, limit: 5 }, function(
      err,data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
  
      data.tracks.items.forEach(function(element) {
        console.log(`Artist: ${element.artists[0].name}`);
        console.log(`Song: ${songName}`);
        console.log(`Spotify Preview Link: ${element.preview_url}`);
        console.log(`Album: ${element.album.name}\n`);
      });
    });
  }
  module.exports = spotifySong