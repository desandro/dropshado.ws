var tumble = require('./_node/tumble');

module.exports = function( grunt ) {

  grunt.registerTask( 'post', 'publish post to dropshado.ws', function( filePath ) {
    var done = this.async();
    tumble.post( filePath, done );
    // console.log( filePath );
  });

  grunt.registerTask( 'getPosts', 'get last posts from blog', function() {
    var done = this.async();
    tumble.getPosts( done );
  })

};
