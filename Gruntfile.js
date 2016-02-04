/*
 * grunt-domino-css
 * https://github.com/cinema6/grunt-domino-css
 *
 * Copyright (c) 2016 Reelcontent, Inc.
 * Licensed under the MIT license.
 */

'use strict';

var TESTS = ['test/spec/**/*.js'];
var TASKS = ['tasks/domino_css.js'];
var CODE = [].concat(TESTS, TASKS, ['Gruntfile.js']);

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: CODE,
            options: {
                jshintrc: true
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['.tmp']
        },

        // Configuration to be run (and then tested).
        domino_css: {
            default_options: {
                options: {},
                files: [
                    {
                        expand: true,
                        cwd: 'test/fixtures',
                        src: '*.css',
                        dest: '.tmp',
                        extDot: 'last',
                        ext: '.css.domino.js'
                    }
                ]
            }
        },

        // Unit tests.
        jasmine: {
            test: {
                src: TESTS
            }
        },

        watch: {
            test: {
                files: CODE,
                tasks: ['test']
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'domino_css', 'jasmine:test']);

    // Watch files for changes and re-run tests when they do.
    grunt.registerTask('tdd', ['test', 'watch:test']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
