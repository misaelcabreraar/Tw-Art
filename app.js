var express = require('express');
var app = express();

app.use(express.static('public'));

var TwitterStream = require('twitter-stream-api'),
  fs = require('fs');
  var keys = {
      consumer_key : "8o6cKb4RZJKbEMKL3HefAJLwE",
      consumer_secret : "1sm3Ez6OMNZiNSnPbdO0KqgthK7FhK3hcIyqb5yfgS2zmSpKGT",
      token : "984851176805097473-mj5c7c0j3TEz3IRyGJLdENXoSd1eZGT",
      token_secret : "tqSFT1R1Nc6hq4ETOp5SB4AGboGGzKwQ73tKVQv4IVEza"
  };
  
var Twitter = new TwitterStream(keys, false);
  Twitter.stream('statuses/filter', {
        track: 'happy'
  });
  
Twitter.pipe(fs.createWriteStream('./public/tweets.json'));
var PythonShell = require('python-shell');
 
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/info', function(request, response) {
  response.sendFile(__dirname + '/public/tweets.json');
});

app.listen(8081, function() {
  console.log("Running Express");  
});
