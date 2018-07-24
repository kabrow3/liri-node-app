# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface.

LIRI is a command line node app that takes in one of 4 commands from the user, entered as paramters, and returns command dependent results.

If the user enters "my-tweets", LIRI will return the most recent 20 tweets of the twitter account attached to the app and display the text of each tweet along with the date and time that it was created.

If the user enters "spotify-this-song" along with a song title, LIRI will return track information for the song entered including the Artist of the track, the name of the track, the url for a 30 second preview of the track, and the album that the track is on. If the user does not enter a specific song title, the app will default to displaying information for "The Light" by Jeremiah (an interesting Spotify Quirk for when your search for a track titled "The Sign").

If the user enters "movie-this" along with a film title, LIRI will return information on the film entered including the title of the film, the year the film came out, the IMDB Rating of the film, the Rotten Tomatoes Score of the film, the Country where the film was made, the primary language of the film, the plot of the film, and the principal actors in the film. If no film title is entered by the user, then the app will return information for the film "Mr. Nobody."

If the user enters "do-what-it-says", then LIRI will take instruction from a text file titled "random.txt". Currently, this file includes the command "Spotify-this-song" and the song title "I want it that Way". The app will respond as if the user entered the command and song title specified in the text file and display results for the hardcoded search.

If the user does not enter anything after running the file in node, LIRI will display a list of commands that the user can enter the next time the app is run.
