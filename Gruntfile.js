module.exports = function(grunt) {

grunt.initConfig({

  sass: {
    files: {
      'css/bootstrap.min.css': 'bower_components/bootstrap-sass/vendor/assets/stylesheets/bootstrap.scss'
    },
    style: 'compressed'
  },
  uglify: {
    all: {
      files: {
        'js/jquery.min.js': 'bower_components/jquery/jquery.js',
        'js/bootstrap.min.js': ['bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
                                 'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
                                 'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
                                 'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js']
      }
    },
  },
  copy: {
    bootstrap: {
      files: [
        {
          expand: true,
          cwd: 'bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap',
          src: ['**'],
          dest: 'css/fonts/'
        }
      ]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'uglify', 'copy', 'exec:build' ]);


};
