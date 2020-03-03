var fs = require("fs");

var axios = require("axios");

var moment = require('moment');


function myConcert(userInput) {

  if(!bandName){
    console.log("Need to assign default value to Band!")
    bandName = "Celine Dion"
  }

    var artist = userInput;
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(url).then(
      function (response) {

      for (var i =0; i < response.data.length; i++){

        console.log('Venue: ${response.data[i].venue.name}');
        console.log('Location: ${response.data[i].venue.city}'+ '${response.data[i].venue.region}');
        console.log('Date of the Event: ${response.data[i].datetime}','YYYY-MM-DDTHH:mmss'.format('MM/DD/YY') );
      }

    }
    
  )}









