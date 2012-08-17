var tumble = require('./_node/tumble');

module.exports = function( grunt ) {

  grunt.registerTask( 'post', 'publish post to dropshado.ws', function( filePath ) {
    console.log( filePath );
  });

};
