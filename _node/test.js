var Tumblr = require('tumblr').Tumblr;
var fs = require('fs');

// get consumer key from file
var consumerKey = fs.readFileSync('consumer.key', 'utf8');

var blog = new Tumblr( 'dsndev.tumblr.com', consumerKey );

blog.posts({limit: 2}, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    console.log(response.posts);
});
