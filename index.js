const gTTS = require('gtts');

var speech = 'Hello everyone! Here’s a quick intro about the three of us!';
var gtts = new gTTS(speech, 'en');

gtts.save('Voice.mp3', function(err, result) {
    if (err) { throw new Error(err); }
    console.log("Text to speech converted!");
});