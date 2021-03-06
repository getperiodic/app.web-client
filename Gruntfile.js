/*
 * app.web-client
 * http://github.amexpub.com/modules/app.web-client
 *
 * Copyright (c) 2013 Amex Pub. All rights reserved.
 */


'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jsbeautifier: {
      files: ["<%= jshint.all %>"],
      options: {
        "indent_size": 2,
        "indent_char": " ",
        "indent_level": 0,
        "indent_with_tabs": false,
        "preserve_newlines": true,
        "max_preserve_newlines": 10,
        "brace_style": "collapse",
        "keep_array_indentation": false,
        "keep_function_indentation": false,
        "space_before_conditional": true,
        "eval_code": false,
        "indent_case": false,
        "unescape_strings": false,
        "space_after_anon_function": true
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {
        src: 'test/**/*.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'index.js',
        'lib/**/*.js',
        'test/**/*.js'
      ]
    },
    copy: {
      main: {
        files: [
          {expand: true,cwd: 'dist', src: ['.npmignore'], dest: '../../periodic/app.web-client/'},
          {expand: true,cwd: 'dist', src: ['.jshintrc'], dest: '../../periodic/app.web-client/'},
          {expand: true,cwd: 'dist', src: ['.gitignore'], dest: '../../periodic/app.web-client/'},
          {expand: true,cwd: 'dist', src: ['.nodemonignore'], dest: '../../periodic/app.web-client/'},
          {expand: true,cwd: 'dist', src: ['**'], dest: '../../periodic/app.web-client/'}
        ]
      }
    },
    clean: ['../../periodic/app.web-client/'],
    watch: {
      scripts: {
        files: [
          'Gruntfile.js',
          'test/**/*.js',
          'lib/**/*.js'
        ],
        tasks: ['lint', 'less'],
        options: {
          interrupt: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["dist/public/stylesheets"],
          yuicompress: true
        },
        files: {
          "example/assets/css/app.css": "./public/assets/css/app.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.registerTask('default', ['jshint', 'simplemocha']);
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('test', 'simplemocha');
};

