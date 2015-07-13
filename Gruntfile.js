module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	sass: {
		dist: {
	    	files: {
	        	'css/resume.css': 'css/resume.scss'
	    	}
		}
	},
	postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer-core')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    },
	watch: {
	      sass: {
	        files: 'css/**/*.scss',
	        tasks: 'sass'
	      }
	    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', ['sass:dist', 'postcss:dist']);
 
};