require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var command = process.argv[2];
var media = process.argv[3];


  console.log("To use this app, please enter one of the following commands:" + "\n" + "'my-tweets'" + "\n" + "'spotify-this-song' + <song name of your choice>" + "\n" + "'movie-this' + <movie name of your choice>" + "\n" + "'do-what-it-says'")


  switch (command) {
    case "my-tweets":
      tweets();
      break;
    
    case "spotify-this-song":
      spotify(media);
      break;
    
    case "movie-this":
      movie(media);
      break;
    
    case "do-what-it-says":
      doWhat();
      break;
  }



function tweets() {
  var params = {
    screen_name: "kev_temp", 
    count: 20
  };

  client.get("statuses/user_timeline", params, function (error, tweets, response) {
    if(error) {
      console.log(error);
    } else {
      console.log("---------------------------")
      console.log("My 20 Most Recent Tweets\n");
      for (var i = 0; i < tweets.length; i++) {
        console.log("Tweet #" + (tweets.length - i) + ": " + tweets[i].text);  
      }
          
    }
  });
}


    