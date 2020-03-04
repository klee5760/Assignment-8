var fs = require("fs");

var axios = require("axios");

var moment = require("moment");
moment().format();

function myConcert(userInput) {
  if (!userInput) {
    console.log("Need to assign default value to Band!");
    userInput = "Celine Dion";
  }

  var artist = userInput;
  var url =
    "https://rest.bandsintown.com/artists/" +
    userInput +
    "/events?app_id=codingbootcamp";

  axios.get(url).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      console.log(`Venue: ${response.data[i].venue.name}");
      console.log(
        "Location: ${response.data[i].venue.city}" +
          "${response.data[i].venue.region}`
      );
      console.log(
        `Date of the Event: ${response.data[i].datetime}`,
        `YYYY-MM-DDTHH:mmss".format("MM/DD/YY")`
      );
    }
  });
}

module.exports = myConcert;
