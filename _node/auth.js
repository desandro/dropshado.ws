/*jshint asi: true */

var express = require('express');
var app = express();

// var Tumblr = require('tumblr').Tumblr;
var Tumblr = require('tumblrwks');
var fs = require('fs');
var yaml = require('js-yaml');
var OAuth = require('oauth').OAuth;

// get consumer key from file
// var credentials = 

var credentialFile = fs.readFileSync( 'tumblr-oauth.yml', 'utf8' );
// var credentialFile = require('./tumblr-api-credentials.yml')
var credentials = yaml.load( credentialFile );

console.log( credentials );


var credentialFile = fs.readFileSync( 'tumblr-oauth.yml', 'utf8' );
// var credentialFile = require('./tumblr-api-credentials.yml')
var credentials = yaml.load( credentialFile );

var auth = new OAuth(
  'http://www.tumblr.com/oauth/request_token',
  'http://www.tumblr.com/oauth/access_token',
  credentials.consumerKey,
  credentials.consumerSecret,
  '1.0A', '/oauthed', 'HMAC-SHA1'
);


// var url = "http://www.tumblr.com/oauth/authorize?oauth_token=zgkHgynJ7DnZQODG9qPtM900nLg9Fg5lJYuA8KGPRJKtJmQUff"

var session = {
  oauth: {}
};

app.get('/', function(req, res){
  auth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
    if (error) {
      new Error(error.data)
    } else {
      session.oauth.token = oauth_token
      session.oauth.token_secret = oauth_token_secret
      res.redirect('http://www.tumblr.com/oauth/authorize?oauth_token='+oauth_token)
     }
  });
  // res.send('Hello World');
});

app.get( '/oauthed', function( req, res ) {
  // console.log( req.session, req.session );
  session.oauth.verifier = req.query.oauth_verifier;
  //   var oauth = req.session.oauth
  // 
    auth.getOAuthAccessToken( session.oauth.token, session.oauth.token_secret, session.oauth.verifier, 
      function(error, oauth_access_token, oauth_access_token_secret, results){
        if (error) new Error(error)
        console.log( arguments );
        res.send( oauth_access_token + ' :: ' + oauth_access_token_secret )
    }
  );
});


app.listen(3000);