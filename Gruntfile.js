module.exports = function(grunt) {
  var name = '<%= pkg.name %>-v<%= pkg.version%>';
   
  grunt.initConfig({
    // pkg must be defined inside initConfig object
    pkg : grunt.file.readJSON('package.json'),
    // uglify configuration
    uglify: {
      options: {
        banner: "",
        sourceMapRoot: '../',
        sourceMap: 'dist/'+name+'.min.js.map',
        sourceMapUrl: name+'.min.js.map'
      },
      target : {
        src : ['src/**/*.js'],
        dest : 'dist/' + name + '.min.js'
      }
    },
    concat: { /* ... concat configuration ... */ },
    jshint: { /* ... jshint configuration ... */ }
  });
   
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};