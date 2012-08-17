
var Tumblr = require('tumblrwks');
var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('underscore');


var authFile = fs.readFileSync( 'tumblr-oauth.yml', 'utf8' );
var authKeys = yaml.load( authFile );

// console.log( authKeys );


var post = fs.readFileSync( '_posts/2012/2012-07-17-yaml-front-matter-markdown-textmate.mdown', 'utf8' );

var dashedSplit = post.indexOf('---') === 0 && post.split('---');


// if no YAML front matter then return
// console.log( dashedSplit.length );
if ( !dashedSplit || dashedSplit.length < 3 ) {
  return;
}

var frontMatter = dashedSplit[1];
var content = dashedSplit[2];

var params = {
  // default post parameters
  format: 'markdown'
};

var postOptions = yaml.load( frontMatter );
// apply defaults
_.extend( params, postOptions );

// apply content to parameters
if ( content ) {
  var contentProperty = params.type === 'link' ? 'description' : 'body';
  params[ contentProperty ] = content;
}

// concatenate tags
if ( params.tags && _.isArray( params.tags ) ) {
  params.tags = params.tags.join(',');
}

// apply

console.log( params );

// console.log( opts );

var blog = new Tumblr( authKeys, "dsndev.tumblr.com" );
// 
blog.post( '/post', params, function(json) {
  console.log( json );
});


