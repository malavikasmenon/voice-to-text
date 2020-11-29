const gTTS = require('gtts');

var speech = 'Hello everyone! Here’s a quick intro about the three of us!';
var mal_Text = 'Hello everyone, I am Malavika S Menon, a third-year CS student from the same college. I work primarily in front-end & content development. I was a delegate at the prestigious international Harvard College Conference.';
var var_text = 'I\'m Varun Krishna S, the team leader and a third-year Computer Science student from Government Model Engineering College Kochi. I work primarily on back-end and Data Science. Also, I was fortunate to be the winner of the national-level Eth-India Hackathon 2019';
var emm_text = "I’m Emmanuel Antony, a third year CS student from the same college. I am a passionate Rust Developer and I was an invited speaker at the In-Clojure Conference.";

var gtts = new gTTS(speech, 'en');

gtts.save('VoiceIntro.mp3', function(err, result) {
    if (err) { throw new Error(err); }
    console.log("Text to speech converted!");
});

var gtts1 = new gTTS(mal_Text, 'en-us');

gtts1.save('VoiceMal.mp3', function(err, result) {
    if (err) { throw new Error(err); }
    console.log("Malavika Done");
});

var gtts2 = new gTTS(var_text, 'en-uk');
gtts2.save('VoiceVar.mp3', function(err, result) {
    if (err) { throw new Error(err); }
    console.log("Varun Done");
})

var gtts3 = new gTTS(emm_text, 'en-au');
gtts3.save('VoiceEmm.mp3', function(err, result) {
    if (err) { throw new Error(err); }
    console.log("Varun Done");
})