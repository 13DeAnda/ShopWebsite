module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'components/**/*.js', 'app.js']
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    sass: {
      dist: {
        files: {
          'static/css/app.css': 'style/app.scss'
        }
      }
    },
    clean: [
      'static/html/',
      'static/js/',
      'static/css/',
      'static/bower_components/'
    ],
    concat: {
      controllers: {
        src: ['components/**/*_controller.js'],
        dest: 'static/js/controllers.js'
      },
      directives: {
        src: ['components/**/*_directives.js'],
        dest: 'static/js/directives.js'
      },
      services: {
        src: ['components/**/*_services.js'],
        dest: 'static/js/services.js'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['app.js'],
            dest: 'static/js/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['components/**/*.html'],
            dest: 'static/html/',
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['bower_components/**'],
            dest: 'static/',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['jshint', 'clean', 'sass', 'copy', 'concat']);
  grunt.registerTask('test', ['jshint']);


};