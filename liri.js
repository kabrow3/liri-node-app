require("dotenv").config();

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

var fs = require("fs");

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
      thisSong();
      break;
    
    case "movie-this":
      thisMovie();
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
    if (error) {
      return console.log('Error occurred: ' + error);
    } else {
      console.log("---------------------------");
      console.log("TWITTER RESULTS");
      console.log("My 20 Most Recent Tweets\n");
      for (var i = 0; i < tweets.length; i++) {
        console.log("Tweet #" + (tweets.length - i) + ": " + tweets[i].text);  
        console.log(tweets[i].created_at);
      }
          
    }
  });
};

function thisSong() {
  if (media === undefined) { 
    media = "The Sign";
  };

  spotify.search({ type: 'track', query: media }, function(error, data) {
    if (error) {
      return console.log('Error occurred: ' + error);
    }
    var track = data.tracks.items[0];
    console.log("--------------------------");
    console.log("SPOTIFY RESULTS");
    console.log("Artist(s): " + track.artists[0].name);
    console.log("Title: " + track.name);
    console.log("Preview: " + track.preview_url);
    console.log("Album: " + track.album.name)
  }); 
};

function thisMovie() {
  if (media === undefined) {
    media = "Mr. Nobody";
  };

  var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + media;
  
  request(queryUrl, function(error, response, body) {
    
    if (!error && response.statusCode === 200) {
      var film = JSON.parse(body);
      console.log("-------------------------------");
      console.log("OMDB RESULTS");
      console.log("Title: " + film.Title);
      console.log("Year: " + film.Year);
      console.log("IMDB Rating: " + film.Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + film.Ratings[1].Value);
      console.log("Country of Origin: " + film.Country);
      console.log("Language: " + film.Language);
      console.log("Plot: " + film.Plot);
      console.log("Actors: " + film.Actors);
    }

  });

};

function doWhat() {
  fs.readFile("./random.txt", "utf8", function (error, data) {
    var dataArr = data.split(",");
    command = dataArr[0];
    media = dataArr[1];
    switch (command) {
      case "my-tweets":
        tweets();
        break;
      case "spotify-this-song":
        thisSong();
        break;
      case "movie-this":
        thisMovie();
        break;
      case "do-what-it-says":
        doWhat();
        break;
    }
  });
};

    