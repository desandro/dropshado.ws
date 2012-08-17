var Tumblr = require('tumblr').Tumblr;
var fs = require('fs');
var yaml = require('js-yaml');

// get consumer key from file
// var consumerKey = fs.readFileSync('consumer.key', 'utf8');
// 
// var blog = new Tumblr( 'dsndev.tumblr.com', consumerKey );
// 
// blog.posts({limit: 2}, function(error, response) {
//     if (error) {
//       throw new Error(error);
//     }
//     console.log(response.posts);
// });


var post = fs.readFileSync('_posts/2012/2012-07-17-yaml-front-matter-markdown-textmate.mdown', 'utf8');

var dashedSplit = post.indexOf('---') === 0 && post.split('---');


// if no YAML front matter then return
console.log( dashedSplit.length );
if ( !dashedSplit || dashedSplit.length < 3 ) {
  return;
}

var frontMatter = dashedSplit[1];
var content = dashedSplit[2];

var opts = yaml.load( frontMatter );

console.log( opts );
