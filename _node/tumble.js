var Tumblr = require('tumblrwks');
var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('underscore');

var tumble = module.exports = {};

// get consumerKey, consumerSecret, accessToken, accessSecret from file
var authFile = fs.readFileSync( 'tumblr-oauth.yml', 'utf8' );
var authKeys = yaml.load( authFile );
var blog = new Tumblr( authKeys, "dsndev.tumblr.com" );

// console.log( authKeys );

// default post parameters
var defaultParams = {
  format: 'markdown'
};

// returns
//  { content: [String], frontMatter: [String], params: [Object] }
function getTumblrPost( filePath ) {
  var post = fs.readFileSync(  filePath, 'utf8' );
  // extract YAML Front Matter from post
  var dashedSplit = post.indexOf('---') === 0 && post.split('---');
  var content = post;
  var postOptions = {};
  var frontMatter;
  // parse YAML from post
  if ( dashedSplit && dashedSplit.length ) {
    frontMatter = dashedSplit[1];
    content = dashedSplit[2];
    postOptions = yaml.load( frontMatter );
  }

  // apply defaults
  var params = _.extend( {}, defaultParams, postOptions );

  // apply content to parameters
  if ( content ) {
    var contentProperty = params.type === 'link' ? 'description' : 'body';
    params[ contentProperty ] = content;
  }

  // concatenate tags
  if ( params.tags && _.isArray( params.tags ) ) {
    params.tags = params.tags.join(',');
  }

  return {
    content: content,
    frontMatter: frontMatter,
    params: params
  };
}

tumble.post = function post( filePath, done ) {
  var tumblrPost = getTumblrPost( filePath );

  blog.post( '/post', tumblrPost.params, function( data ) {
    console.log( 'Post created! Post id: ' + data.green );
    if ( done ) done();
  });

};

tumble.getPosts = function( done ) {
  blog.get( '/posts', { hostname: 'dsndev.tumblr.com', limit: 10 }, function( data ) {
    console.log( data );
    if ( done ) done();
  });
};
