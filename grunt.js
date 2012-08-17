var tumble = require('./_node/tumble');

module.exports = function( grunt ) {

  grunt.registerTask( 'post', 'publish post to dropshado.ws', function( filePath ) {
    var done = this.async();
    tumble.post( filePath, done );
    // console.log( filePath );
  });

};
